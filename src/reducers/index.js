import { combineReducers } from "redux";
//нужно получить редюсер букс
import books from "@/reducers/books";


export default combineReducers({
    //можно передать просто переменной
    // books: books
    books
})