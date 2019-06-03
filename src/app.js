//Archivo base que comunica a todas las cosas

import {
    initFirebase
} from './assets/js/initFirebase.js';

import {
    initRouter
} from './route.js';


const init = () => {

    initRouter();
    initFirebase();
}

window.addEventListener('load', init);

