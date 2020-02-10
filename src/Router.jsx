import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Details from './views/Details';
import Login from './views/Login';
import Results from './views/Results';
import Search from './views/Search';

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Login />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/repositories/details/:id">
                    <Details />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/repositories">
                    <Results />
                </Route>
            </Switch>
        </Router>
    );
};
