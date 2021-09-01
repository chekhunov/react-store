import { combineReducers } from "redux";
//нужно получить редюсер букс
import books from "@/reducers/books";
import cart from "@/reducers/cart";


export default combineReducers({
    //можно передать просто переменной
    // books: books
    books,
    cart
})