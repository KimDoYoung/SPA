import {sum} from './math.js';
import "./app.css";
import img1 from './img1.png';


window.addEventListener('DOMContentLoaded', ()=>{
    sum(1,2);
    const el = document.querySelector("#app");;
    el.innerHTML = `
        <h1> 1+ 2 = ${sum(1,2)} </h1> 
        <img src="${img1}" alt="img1"/>
    `
});