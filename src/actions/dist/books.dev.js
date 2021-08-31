"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setBooks = void 0;

var setBooks = function setBooks(books) {
  return {
    type: 'SET_BOOKS',
    payload: books
  };
};

exports.setBooks = setBooks;