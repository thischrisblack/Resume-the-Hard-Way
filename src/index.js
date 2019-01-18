import style from "./main.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {resume as res} from './resume.js';

let keys = Object.getOwnPropertyNames(res);

document.querySelector('#name').textValue = 'monkey';

keys.forEach(key => {

    // Check if it's not an array
    if (!Array.isArray(res[key])) {
        singleInsert(key);
    } else {
        // If it is an array, create a UL and loop throug the values
        
    }

});

function singleInsert(key) {
    if (key === 'email' || key === 'portfolio') {
        // Clear the space
        document.querySelector('#'+key).textContent = '';

        // Make <a> element
        var link = document.createElement('a');

        // Href, ID attribute
        let href = (key === 'email') ? 'mailto:' + res[key] : 'http://' + res[key];
        link.setAttribute('href', href);
        link.setAttribute('ID', key + '-link');
        
        // Insert a tags, then add link text.
        document.querySelector('#'+key).appendChild(link);
        document.querySelector('#'+key+'-link').textContent = res[key];
        
    } else {
        document.querySelector('#'+key).textContent = res[key];
    }

}