"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxLogger = _interopRequireDefault(require("redux-logger"));

var _reducers = _interopRequireDefault(require("./reducers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//эта штука обьеденяет наши редбюсеры в один
var _default = function _default() {
  var store = (0, _redux.createStore)(_reducers["default"], (0, _redux.applyMiddleware)(_reduxLogger["default"]));
  return store;
}; //
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


exports["default"] = _default;