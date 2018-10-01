import {store} from './components/store.js'
import {printToDom} from './helpers/util.js'

console.log('main.js is connected');

store();

printToDom(store(),'book');