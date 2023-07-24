import '../styles/main.scss';
// @ts-ignore
import pngImg from '../assets/4k.png';
import {print} from "./print";
// @ts-ignore
import _ from 'lodash';

const root = document.querySelector('#app');
root.innerHTML = _.join(['Hello', 'webpack'], ' ');

const img = new Image();
img.src = pngImg;
root.appendChild(img);

print();
