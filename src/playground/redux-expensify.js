import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

console.log('redux-expensify');

//ADD EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
} = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
//REMOVE_EXPENSE

const removeExpense = ({id}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SORT_BY_START_DATE
//SORT_BY_END_DATE

//Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    console.log('Kom inn i expensesReducer');

    switch (action.type) {
        case 'ADD_EXPENSE':
            console.log(JSON.stringify(action.type));
            // return state.concat(action.expense);  //Må bruke concact istedenfor push fordi concat lager en ny, mens push endrer på eksisterende
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            console.log(JSON.stringify(action.id));
            console.log(JSON.stringify(state));
            return state.filter(({id}) => id !== action.id) //Filter lager en ny array, endrer ikke eksisterende
            
        default:
            return state;
    }
};

//Filters Reducer
const filtersReducerDefaultStore = {
    text: '',
    sortBy: 'date', //Date or amount
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultStore, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe( () => {
    console.log(store.getState());
});

const expense1 = store.dispatch(addExpense({description: 'leie', amount : 100}));
const expense2 = store.dispatch(addExpense({description: 'sjokomelk', amount : 200}));

store.dispatch(removeExpense({id : expense1.expense.id}));


const demostate = {
    expenses: [{
        id: '34242',
        description: 'januar avgift',
        note: 'Årets første beløp',
        amount: '54500',
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //Date or amount
        startDate: undefined,
        endDate: undefined
    }
};