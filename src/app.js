//Archivo base que comunica a todas las cosas

import {initFirebase} from './assets/js/initFirebase.js';

import {initRouter} from './route.js';

import {observer} from './assets/js/auth.js';
import { realTime } from './assets/js/data.js';

const init = () => {

    
    initFirebase();
    observer()
    initRouter();
    realTime();
  
}

window.addEventListener('load', init);

