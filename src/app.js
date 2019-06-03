//Archivo base que comunica a todas las cosas

import {initFirebase} from './assets/js/initFirebase.js';

import {initRouter} from './route.js';
import { observer } from './assets/js/auth.js'


const init = () => {

    initRouter();
    initFirebase();
    observer();
}

window.addEventListener('load', init);

