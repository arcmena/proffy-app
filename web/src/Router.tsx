import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/study" component={TeacherList} />
                <Route path="/give-classes" component={TeacherForm} />
            </Switch>
        </Router>
    )
}

export default Routes;