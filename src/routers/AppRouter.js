import {Route, BrowserRouter, Switch, Link} from 'react-router-dom';
import React from 'react';

import Contact from '../components/Contact';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/portfolio/:id" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;