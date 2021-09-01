import React, {Component} from 'react';
//с помощью коннект мы соединяем нашь компонент с хранилищем
import {connect} from "react-redux";
import { setBooks } from './actions/books';
import axios from 'axios';
import TopMenu from './components/TopMenu.jsx';
import {Container} from 'semantic-ui-react';
import CardBook from './components/CardBook.jsx';
import { Card } from 'semantic-ui-react';

// import books from './books.json';
// import { BrowserRouter as Route } from 'react-router-dom';

// function Home(books) {
//     return (<div className={"wrapper"}>
//         <h2>{books[0].title}</h2>
//     </div>)
// }

// class App extends Component {
const App = (props) => {
    const {setBooks} = props
    const {books, isReady} = props.books
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {

    async function fetchData() {
        const componentWillMount = await
            //там где then используется ECMAScript
            axios.get('http://reactstore.mocklab.io/books')
            // .then((({data}) => {
            //     setBooks(data)
            //     setItems(data)
            //     console.log(items)
            // }));
            setItems(componentWillMount.data)
            setBooks(componentWillMount.data)
    }
    fetchData();
}, []);

const mapStateToProps = ({books: {items}}) => ({
    books: books.items,
    isReady: books.isReady
})
    
    // render() {
       
        
        // const newBooks = [
        //     {
        //         id: 0,
        //         title: 'Книга Еллайя -' + new Date()
        //     }
        // ]

        return (
            <Container>
                <TopMenu />
                <Card.Group itemsPerRow={4}>
                <ul>
                {
                  !isReady ? '...Loading'  :
                  books.map((book, index) => (
                       <CardBook  {...book} />
                    ))
                }
                </ul>
                </Card.Group>
            </Container>
            // <div>
            //     {/*<Route path="/" exact><Home books={books} /></Route>*/}
            //     {/* <Popup /> */}
            //     <h2>{books[0].title}</h2>
            //     {/*bind используем чтоб при рендере не срабатывал клик*/}
            //     <button onClick={setBooks.bind(this, newBooks)}>SET NEW BOOKS</button>
            // </div>
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