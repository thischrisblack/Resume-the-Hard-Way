import style from "./main.css";
// This is my resume. A generic starter resume is in src/resume.json
const res = require('./chrisblack-resume.json');
var linkifyStr = require('linkifyjs/string');


/**
 * Route an object or array for further processing.
 * @param {Object} object - The resume JSON file, at first, or a value within that file.
 * @param {element} [parent=document.querySelector('body')] - The parent node to be passed into the next function.
 */
function objectHandler(object, parent = document.querySelector('body')) {

    let keys = Object.getOwnPropertyNames(object);

    keys.forEach(key => {
        if (Array.isArray(object[key])) {
            // Pass object, current key, and parent node.
            arrayHandler(object, key, parent);            
        } else {
            // Pass value of the current key, current key, and parent node.
            nodeAppender(object[key], key, parent);
        }
    });
}



/**
 * Create a new DOM node from a key / value pair, or reroute if value is an object.
 * @param {string|Object|Array} object - The value of the passed key / value pair. 
 * @param {string} key - The key of the passed key / value pair. 
 * @param {element} parent - The parent node of created DOM node.
 * @param {element} [type=div] - The type of created DOM node.
 */
function nodeAppender(object, key, parent, type = 'div') {
    var newNode = document.createElement(type);
    // Set element's class to the key (e.g. 'name' or 'skill').
    newNode.setAttribute('class', key);
    parent.appendChild(newNode);
    if (typeof object === 'object') {
        // Objects go back through the top, with the parent updated.
        objectHandler(object, newNode);
    } else {   
        // If it's not an object, it's ready to display.     
        newNode.innerHTML = object;
    }
}


/**
 * Turn arrays into unordered lists.
 * @param {Array} object - The object with the array in it.
 * @param {string} key - The key of the array in the object.
 * @param {element} parent - The parent node of the newly crated <ul> element.
 */
function arrayHandler(object, key, parent) {

    // All arrays are made into UL.
    var newList = document.createElement('ul');
    newList.setAttribute('class', key);
    parent.appendChild(newList);

    // Now loop through the array.
    object[key].forEach(el => {
        nodeAppender(el, key, newList, 'li');
    });
}

/**
 * Where do the new nodes go?
 * Newly-created elements of class [0] are to be appended to element [1].
 */
var layout = [
    ['.name', 'name'],
    ['.address', 'address'],
    ['.position', 'name'],
    ['.contact', 'contact'],
    ['.projects', 'main'], 
    ['.portfolio', 'aside'],
    ['.skills', 'aside'],
    ['.footer', 'footer']
];

/**
 * Place new DOM nodes in their proper places.
 * @param {Array} layout - An array of class/element pairs.
 */
function nodePlacer(layout) {
    layout.forEach(el => {
        let parent = document.querySelector(el[1]);
        let child = document.querySelector(el[0]);
        // First create section header from each class name.
        nodeAppender(child.className, 
                     'section-header section-header-' + child.className, 
                     parent, 
                     'h1');
        // Then append further nodes.
        parent.appendChild(child);
    });
}

/**
 * Linkify link strings.
 */
function linkifier() {
    // Linkify text in these classes
    var linkNodes = ['.email', '.portfolio', '.project__link', '.note', '.footer'];

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

// Set the page title
document.title = res.name + ' - Resume';