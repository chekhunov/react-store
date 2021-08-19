import { createStore, applyMiddleware } from 'redux'
//позволяет следить за всеми изменениями и экшенами которые происходят
import logger from "redux-logger"
//эта штука обьеденяет наши редбюсеры в один
import rootReducer from './reducers'

export default () => {
const store = createStore(rootReducer, applyMiddleware(logger))
    return store
};

//
// function todos(state = [], action) {
//     switch (action.type) {
//         case 'ADD_TODO':
//             return state.concat([action.text])
//         default:
//             return state
//     }
// }

// let store = createStore(todos, ['Use Redux'])

// store.dispatch({
//     type: 'ADD_TODO',
//     text: 'hello'
//     //текст передает по кускам свойства для того чтоб кидать кудчей надо включить пейлоадер
//     // payload: {
//     //     text: 123,
//     //     id: 1
//     // }
// })

// console.log(store.getState())
// [ 'Use Redux', 'Read the docs' ]