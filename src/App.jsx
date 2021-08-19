import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import {Provider} from "react-redux";
import './store'

function Home(props) {
    return null;
}

const App = () => {

    return (
        <div className={"App"}>
            <Route path="/" exact><Home /></Route>
            {/* <Popup /> */}
        </div>
    );
};

export default App;