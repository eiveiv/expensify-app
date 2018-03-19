import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = ( {id, description, amount, createdAt}) => (
    <div >
        {/* <h1>{description} </h1> */}
        <Link to={`/edit/${id}`} >{description}</Link>
        <h1>{amount} </h1>
        <h1>{createdAt} </h1>
    </div>
);

// const removeListItem = (id) => {
//     console.log('removing ${id}');
//     store.dispatch(removeExpense())
// };



export default ExpenseListItem;