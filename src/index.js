import style from "./main.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {resume as res} from './resume.js';

objectHandler(res, document.querySelector('body'));

function objectHandler(object, parent) {
    let keys = Object.getOwnPropertyNames(object);
    //console.log(keys);
    keys.forEach(key => {
        // Check if it's not an array
        if (!Array.isArray(object[key])) {
            nodeAppender(object[key], parent);
        } else {
            arrayHandler(key, parent);            
        }
    });
}

// nodeAppender (key, parent)
//
// Create and append new node of class=key and content=res[key]

function nodeAppender(value, parent, type = 'div') {
    var newNode = document.createElement(type);
    newNode.setAttribute('class', value);
    newNode.innerHTML = value;
    parent.appendChild(newNode);
    //console.log(key, parent);
}

// arrayHandler (array, parent)
//
// Get each element of array
//
// If object, make an LI and recurse to top with new parent (this.parent node)
//
// If not, append LI node.

function arrayHandler(key, parent) {
    var newList = document.createElement('ul');
    newList.setAttribute('class', key);
    parent.appendChild(newList);
    res[key].forEach(el => {
        if (typeof el === 'string') {
            nodeAppender(el, newList, 'li');
        } else {
            // CREATE newLI HERE, APPENDED TO newList
            objectHandler(el, newLI);
        };
    });
}




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