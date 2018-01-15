import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch, Link, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';



const ExpenseDashboardPage = () => (
    <div>
        Dashboardcomponent
    </div>
);

const AddExpensePage = () => (
    <div>
        AddExpensePage
    </div>
);

const EditExpensePage = () => (
    <div>
        EditExpensePage
    </div>
);

const HelpPage = () => (
    <div>
        HelpPage 
    </div>
);

const NotFoundPage = () => (
    <div>
        404 page not found <Link to="home">Go home </Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}> Home</NavLink>
        <NavLink to="/edit" activeClassName="is-active"> Edit</NavLink>
        <NavLink to="/create" activeClassName="is-active"> Create</NavLink>
        <NavLink to="/help" activeClassName="is-active"> Help</NavLink>
    </header>
)

const routes = (
    <BrowserRouter> 
    <div>
        <Header />
        <Switch>
        <Route name="home" path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route component={NotFoundPage} />
        </Switch>
    </div>
    </BrowserRouter>
);

//stateless functional component

ReactDOM.render( routes, document.getElementById('app'));








