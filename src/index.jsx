//установили jquery
// import * as $ from 'jquery'
// import Post from '@models/Post';
// import json from '@/assets/json'
// import logo from '@/assets/1.png'
// import csv from '@/assets/data.csv'
// const post = new Post('Webpack Post', logo)
//c помощью jquery в тег pre в html файле выводим данные
// $('pre').addClass(post.toString())
// $('pre').html(post.toString())
// import './styles/less.less';
import '@/babel';
import '@/styles/style.css';
import '@/styles/index.scss';
import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import App from '@/App.jsx';
import 'macro-css';

//компонент для обьединения редакс и реакт
//провайдкр все склеит и передаст в наш компонент
import {Provider} from "react-redux";

import createStore from './store'
const store = createStore();
//
// setTimeout(function () {
//     store.dispatch({
//         type: 'SET_BOOKS',
//         payload: [
//             {
//             id: 0,
//             title: 'Книга Еллайя'
//         }
//         ]
//     })
// }, 1000);

// React.useEffect(()=>{
// },[])

render(
    <React.StrictMode >
        <Router >
            <Provider store={createStore()}>
              <App />
            </Provider>
        </Router >
    </React.StrictMode >,
    document.getElementById('root')
);