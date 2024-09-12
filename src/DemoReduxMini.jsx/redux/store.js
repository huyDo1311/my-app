import {createStore} from 'redux'
import {reducer} from './reducer'

export let store = createStore(reducer);
export let stote = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())