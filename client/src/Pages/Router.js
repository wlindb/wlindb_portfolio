import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Landing from './Landing';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route exact path="/home" component={Landing} ></Route>
                    <Route exact path="/about" name='About' component={About} ></Route>
                    <Route exact path="/portfolio/" name='Portfolio' component={Portfolio} ></Route>
                    <Route exact path="/contact" name='Contact' component={Contact} ></Route>
                    <Route component={Landing}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Router;