import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Router';

import './assets/styles/global.css'

const App: FunctionComponent = () => {
    return (
        <Router>
            <Routes />
        </Router>
    );
};

export default App;
