//установили jquery
// import * as $ from 'jquery'
// import Post from '@models/Post';
import './babel';
import './styles/style.css';
// import './styles/less.less';
import './styles/index.scss';
// import json from '@/assets/json'
// import logo from '@/assets/1.png'
// import csv from '@/assets/data.csv'
// const post = new Post('Webpack Post', logo)
//c помощью jquery в тег pre в html файле выводим данные
// $('pre').addClass(post.toString())
// $('pre').html(post.toString())

import React from 'react';
import { render } from 'react-dom';
import 'macro-css';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App.jsx';

render(
    <React.StrictMode >
        <Router >
            <App />
        </Router >
    </React.StrictMode >,
    document.getElementById('root')
);