//Archivo base que comunica a todas las cosas

import { initFirebase } from './assets/js/initFirebase.js';

const init = () => {
    initFirebase();
}


window.addEventListener('load', init);