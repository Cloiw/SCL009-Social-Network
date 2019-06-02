//Archivo base que comunica a todas las cosas

import { initFirebase } from './assets/js/initFirebase.js';

import {initRouter} from './route.js';
import {initFirebase} from './assets/js/initFirebase.js'

const init = () => {
    initFirebase();
}


const init =()=>{
    initRouter();
}

window.addEventListener('load', init);