import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';


const store = configureStore();
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(state);
    console.log(visibleExpenses);
});


store.dispatch(addExpense({description: 'water bill', amount: 500, createdAt: 10}));
store.dispatch(addExpense({description: 'gas bill', amount: 700, createdAt: 100}));

store.dispatch(setTextFilter('water'));


ReactDOM.render( <AppRouter />, document.getElementById('app'));








