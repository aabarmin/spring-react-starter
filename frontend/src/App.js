import React, {Component} from 'react';

import Application from "./Application";
import store from "./app/store/store";
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Application/>
                </Router>
            </Provider>
        );
    }
}

export default App;
