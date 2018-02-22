import React from 'react';
import {connect} from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ( {dispatch, id, description, amount, createdAt}) => (
    <div >
        <h1>{description} </h1>
        <h1>{amount} </h1>
        <h1>{createdAt} </h1>
        <button onClick={() => {
            dispatch(removeExpense({id}));
        }}>Delete</button>
    </div>
);

// const removeListItem = (id) => {
//     console.log('removing ${id}');
//     store.dispatch(removeExpense())
// };



export default connect()(ExpenseListItem);