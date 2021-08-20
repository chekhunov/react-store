import React, {Component} from 'react';
//с помощью коннект мы соединяем нашь компонент с хранилищем
import {connect} from "react-redux";
import { setBooks } from './actions/books'
// import { BrowserRouter as Route } from 'react-router-dom';

// function Home(books) {
//     return (<div className={"wrapper"}>
//         <h2>{books[0].title}</h2>
//     </div>)
// }

// class App extends Component {
const App = (props) => {
    // render() {
        const {books} = props.books
        const {setBooks} = props
        const newBooks = [
            {
                id: 0,
                title: 'Книга Еллайя -' + new Date()
            }
        ]
        return (
            <div>
                {/*<Route path="/" exact><Home books={books} /></Route>*/}
                {/* <Popup /> */}
                <h2>{books[0].title}</h2>
                {/*bind используем чтоб при рендере не срабатывал клик*/}
                <button onClick={setBooks.bind(this, newBooks)}>SET NEW BOOKS</button>
            </div>
        )
    }
// }

//прикручиваем состояние в пропсы
const mapStateToProps = state => ({
    ...state
})

// тут мы склеиваем все наши методы в одно целое состояния
const mapDispatchToProps = dispatch => ({
    //вернет обьект который мы отправляем в наш редьюсер
setBooks: books => dispatch(setBooks(books))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);