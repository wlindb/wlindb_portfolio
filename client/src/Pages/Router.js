import React, { Suspense, lazy } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Loading from '../components/Loading';

const Landing = lazy(() => import('./Landing'));
const Portfolio = lazy(() => import('./Portfolio'));
const Contact = lazy(() => import('./Contact'));

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Suspense fallback={<Loading/>}>
                <Switch>
                    <Route exact path="/home" component={Landing} ></Route>
                    <Route exact path="/portfolio/" name='Portfolio' component={Portfolio} ></Route>
                    <Route exact path="/contact" name='Contact' component={Contact} ></Route>
                    <Route component={Landing}/>
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router;