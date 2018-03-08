import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateLayout from './components/PrivateLayout';
import Home from './components/Home';
import Workflow from './components/Workflow';
import Statistic from './components/Statistic';
import Calendar from './components/Calendar/Calendar';
import Users from './components/Users/UsersPage';
import UsersTestPage from './components/UsersTestPage';
import AuthorizationPage from './components/AuthorizationPage';
import NotFoundPage from './components/NotFoundPage';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <PrivateLayout exact path="/workflow" component={Workflow}/>
                    <PrivateLayout exact path="/statistics" component={Statistic}/>
                    <PrivateLayout exact path="/calendar" component={Calendar}/>
                    <PrivateLayout exact path="/users" component={Users}/>
                    <PrivateLayout exact path="/settings" component={UsersTestPage}/>
                    <Route exact path="/login" component={AuthorizationPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </Router>
        );
    }
}
export default App;