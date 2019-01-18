import style from "./main.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { chrisBlack } from './resume.js';

console.log(chrisBlack.header);

document.querySelector('#name').textContent = chrisBlack.header.name;
document.querySelector('#position').textContent = chrisBlack.header.position;
document.querySelector('#contact').innerHTML = chrisBlack.header.contact.address + '<br>' +
                                                    chrisBlack.header.contact.phone + '<br>' +
                                                    '<a href="mailto:' + chrisBlack.header.contact.email +
                                                    '">' +  chrisBlack.header.contact.email + '</a>';