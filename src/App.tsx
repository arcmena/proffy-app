import React, { FunctionComponent } from 'react';

import Routes from './Router';

import './assets/styles/global.css'

const App: FunctionComponent = () => {
    return (
        <div className="App">
            <Routes />
        </div>
    );
};

export default App;
