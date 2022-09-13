import "@babel/polyfill";
import './index.pug';
import './index.scss';
import code from './img/code.jpg'
import { mult, sum } from './modules/calc';

const img = new Image();
img.src = code;


console.log(mult(3, 4))  
console.log(sum(3, 4))