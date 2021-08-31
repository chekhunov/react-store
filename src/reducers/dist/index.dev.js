"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _books = _interopRequireDefault(require("@/reducers/books"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//нужно получить редюсер букс
var _default = (0, _redux.combineReducers)({
  //можно передать просто переменной
  // books: books
  books: _books["default"]
});

exports["default"] = _default;