import style from "./main.css";
const res = require('./resume.json');
var linkifyStr = require('linkifyjs/string');

// objectHandler is the entry point for the resume object.
// Its default parent node is <body>
function objectHandler(object, parent = document.querySelector('body')) {

    let keys = Object.getOwnPropertyNames(object);

    keys.forEach(key => {        
        // Test if array and route accordingly.
        if (Array.isArray(object[key])) {
            arrayHandler(object, key, parent);            
        } else {
            nodeAppender(object[key], key, parent);
        }
    });
}

// nodeAppender creates and displays DOM nodes, or routes input back through
// objectHandler if it's an object
function nodeAppender(value, key, parent, type = 'div') {
    // Creates new node, default 'div' with class and value set to object properties.
    var newNode = document.createElement(type);
    newNode.setAttribute('class', key);
    parent.appendChild(newNode);
    if (typeof value === 'object') {
        // Objects recurse through the top, with the object and parent updated
        objectHandler(value, newNode);
    } else {   
        // If it's not an object, it's ready to display.     
        newNode.innerHTML = value;
    }
}

// If the object property is an array, a new UL is created
// and the elements are sent to the nodeAppender
function arrayHandler(object, key, parent) {

    // All arrays are made into UL, with class of object property name.
    var newList = document.createElement('ul');
    newList.setAttribute('class', key);
    parent.appendChild(newList);

    // Now loop through the array.
    object[key].forEach(el => {
        nodeAppender(el, key, newList, 'li');
    });
}

// What resume elements go where in the layout.
var layout = [
    ['.name', 'name'],
    ['.address', 'address'],
    ['.position', 'name'],
    ['.contact', 'contact'],
    ['.portfolio', 'aside'],
    ['.skills', 'aside'],
    ['.experience', 'main']
];

// Go through the layout array and move the nodes to where they belong.
function nodePlacer(array) {
    array.forEach(el => {
        let parent = document.querySelector(el[1]);
        let child = document.querySelector(el[0]);
        // Create section header from class name.
        nodeAppender(child.className, 'section-header section-header-' + child.className, parent, 'h1');
        parent.appendChild(child);
    });
}

// Uses linkifyjs package to linkify the text in selected nodes.
function linkifier() {
    // Linkify text in these classes
    var linkNodes = ['.email', '.portfolio', '.project_link'];

    linkNodes.forEach(node => {
        let link = document.querySelectorAll(node);
        link.forEach(el => {
            let newLink = linkifyStr(el.textContent);
            el.innerHTML = newLink;
        });
        
    })
}

// Start the whole thing.
objectHandler(res);

// Place those nodes.
nodePlacer(layout);

// Linkify the links
linkifier();