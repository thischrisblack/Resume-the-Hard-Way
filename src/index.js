import style from "./main.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {resume as res} from './resume.js';

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



objectHandler(res);


// runResume(res);

// function runResume(object) {

//     let keys = Object.getOwnPropertyNames(object);

//     keys.forEach(key => {

//         // Check if it's not an array
//         if (!Array.isArray(res[key])) {
//             singleInsert(key);
//         } else {
//             // If it is an array, create a UL and loop through the values
            
//         }
    
//     });
// }


// function singleInsert(key) {
//     if (key === 'email' || key === 'portfolio') {
//         // Clear the space
//         document.querySelector('#'+key).textContent = '';

//         // Make <a> element
//         var link = document.createElement('a');

//         // Href, ID attribute
//         let href = (key === 'email') ? 'mailto:' + res[key] : 'http://' + res[key];
//         link.setAttribute('href', href);
//         link.setAttribute('ID', key + '-link');
        
//         // Insert a tags, then add link text.
//         document.querySelector('#'+key).appendChild(link);
//         document.querySelector('#'+key+'-link').textContent = res[key];
        
//     } else {
//         document.querySelector('#'+key).textContent = res[key];
//     }

// }