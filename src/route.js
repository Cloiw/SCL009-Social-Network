//Configuración de las rutas

//importación de los templates construidos
import {templateHome} from './assets/views/templateHome.js';
import {templateWall} from './assets/views/templateWall.js';
import {templateCreate} from './assets/views/templateCreate.js';
import {templatePost} from './assets/views/templatePost.js'
import { observer } from './assets/js/auth.js';



/*Crear una función que reciba el hash (#) y según la coincidencia retorne otra función que va imprimir
el template en el html*/

//reconoce el cambio de ruta y llama a la función que muestra el template correspondiente
const changeRoute = (hash) =>{
    if (hash === '#/home') {
        //le pasa como parametro #/home a la función showTemplate
        return showTemplate(hash);
    }

    if (hash === '#/wall') {
        //le pasa como parametro #/about a la función showTemplate
        return showTemplate(hash);
    }

    if (hash === '') {
        //le pasa como parametro #/ a la función showTemplate
        return showTemplate(hash);
    }

    if (hash === '#/create') {
        //le pasa como parametro #/ a la función showTemplate
        return showTemplate(hash);
    }

    if (hash === '#/post') {
        //le pasa como parametro #/ a la función showTemplate
        return showTemplate(hash);
    }
}

/*La función showTemplate(), se encarga de imprimir el template en el index.html*/
const showTemplate = (hash) =>{
    //Se saca el #/ del string
    const router = hash.substring(2);
    //Obtener desde el html el id del elemento donde se imprimirá showTemplate
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML='';

    //Se hace el match del hash utilizado y el template que quiero mostrar
    switch (router) {          
        case 'home':
            templateHome();
            break;
        case '':
            templateHome();
            break;
        case 'create':
            templateCreate();
            break;
        case 'wall':
            templateWall();
            break;
        case 'post':
            templatePost();
            break;
        default:
            containerRoot.innerHTML = `<p>Error 404</p>`
    }
}

//inicializar las rutas para que se ejecute changeRouter() y luego showTemplate()

//se exportar la  funcion ya que es la que almacena el cambio de hash
export const initRouter = () =>{
    //evento que carga la página, ya que la url cambia
    window.addEventListener('load',changeRoute(window.location.hash));
    //Metodo que reconocer si hubo un cambio en el hash y le pasa ese nuevo hash a changeRouter

    if('onhashchange' in window){
        //cuando reconoce un cambio de hash, llama a la función changeRoute para qur cambie la vista
        window.onhashchange = () =>{
            observer()
            changeRoute(window.location.hash);
        }
    }

} 
