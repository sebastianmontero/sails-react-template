import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import {
    Header,
    Home,
    About,
    Signin,
    Signup,
} from '..';

class App extends Component {
    state = {};

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/signin" component={Signin} />
                        <Route path="/signup" component={Signup} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default hot(module)(App);
