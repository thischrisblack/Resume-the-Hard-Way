const resume = require('./resume.json');
const linkifyStr = require('linkifyjs/string');

/**
 * Route an object or array for further processing.
 * @param {Object} object - The resume JSON file, at first, or a value within that file.
 * @param {element} [parent=document.querySelector('body')] - The parent node to be passed into the next function.
 */
function objectHandler(object, parent = document.querySelector('body')) {
    let keys = Object.getOwnPropertyNames(object);

    keys.forEach((key) => {
        if (Array.isArray(object[key])) {
            arrayHandler(object[key], key, parent);
        } else {
            nodeAppender(object[key], key, parent);
        }
    });
}

/**
 * Create a new DOM node from a key / value pair, or reroute if value is an object.
 * @param {string|Object|Array} element - The value of the passed key / value pair.
 * @param {string} key - The key of the passed key / value pair.
 * @param {element} parent - The parent node of created DOM node.
 * @param {element} [type=div] - The type of created DOM node.
 */
function nodeAppender(element, key, parent, type = 'div') {
    const newNode = document.createElement(type);
    // Set element's class to the key (e.g. 'name' or 'skill').
    newNode.setAttribute('class', key);
    // If it's a list item or H1, add hider class.
    if (type === 'li' || type === 'h1') {
        newNode.classList.add('hider');
    }
    parent.appendChild(newNode);
    if (typeof element === 'object') {
        // Objects recurse, with the parent updated.
        objectHandler(element, newNode);
    } else {
        // If it's not an object, it's ready to display.
        newNode.innerHTML = element;
    }
}

/**
 * Turn arrays into unordered lists.
 * @param {Array} array - The array passed in.
 * @param {string} key - The key of the array's location in the object of origin.
 * @param {element} parent - The parent node of the newly crated <ul> element.
 */
function arrayHandler(array, key, parent) {
    const newList = document.createElement('ul');
    newList.setAttribute('class', key);
    parent.appendChild(newList);

    array.forEach((el) => {
        // Each element is appended as a new <li> node to the parent <ul>
        nodeAppender(el, key, newList, 'li');
    });
}

/**
 * Newly-created elements of class [0] are to be appended to element [1].
 */
const layout = [
    ['.name', 'name'],
    ['.address', 'address'],
    ['.position', 'name'],
    ['.contact', 'contact'],
    ['.experience', 'main'],
    ['.projects', 'main'],
    ['.portfolio', 'aside'],
    ['.skills', 'aside'],
    ['.footer', 'footer'],
];

/**
 * Place new DOM nodes in their proper places.
 * @param {Array} layout - An array of class/element pairs.
 */
function nodePlacer(layout) {
    layout.forEach((layoutPair) => {
        let parent = document.querySelector(layoutPair[1]);
        let child = document.querySelector(layoutPair[0]);
        // First create section header from each class name.
        nodeAppender(
            child.className,
            'section-header section-header-' + child.className,
            parent,
            'h1'
        );
        // Then append the rest of the nodes.
        parent.appendChild(child);
    });
}

/**
 * Linkify link strings.
 */
function linkifier() {
    // Linkify text in these classes
    const linkNodes = [
        '.email',
        '.portfolio',
        '.project__link',
        '.note',
        '.footer',
    ];

    linkNodes.forEach((node) => {
        let link = document.querySelectorAll(node);
        link.forEach((el) => {
            let newLink = linkifyStr(el.textContent);
            el.innerHTML = newLink;
        });
    });
}

/**
 * Make projects or skills hide-able by clicking on them.
 */
function enableHideableNodes() {
    let hideableNodes = document.querySelectorAll('.hider');
    hideableNodes.forEach((node) => {
        node.addEventListener('click', (e) => {
            // If it's an <li>, hide it, if not, hide its parent.
            if (e.target.nodeName === 'LI' || e.target.nodeName === 'H1') {
                e.target.style.display = 'none';
            } else {
                e.target.parentNode.style.display = 'none';
            }
        });
    });
}

// Start the whole thing.
objectHandler(resume);

// Place the fresh nodes in the layout.
nodePlacer(layout);

// Linkify the links
linkifier();

/**
 * Add hide-able node event listeners.
 * Use ONLY when you're working on your resume *locally* for printing or saving.
 * DO NOT enable this for web deployment, or else your nodes will disappear
 * when people click on the links, etc.
 */
// enableHideableNodes();

// Set the page title
document.title = resume.name + ' - Resume';
