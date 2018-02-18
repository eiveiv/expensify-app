import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
// import { start } from 'repl';

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

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
//SET_TEXT_FILTER

const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text
});
//SORT_BY_DATE

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
//SORT_BY_AMOUNT

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});
//SORT_BY_START_DATE

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

//SORT_BY_END_DATE

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

//Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch (action.type) {
        case 'ADD_EXPENSE':
            // return state.concat(action.expense);  //Må bruke concact istedenfor push fordi concat lager en ny, mens push endrer på eksisterende
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id) //Filter lager en ny array, endrer ikke eksisterende
        case 'EDIT_EXPENSE':
            return state.map( (expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } 
            });    
        
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
        case 'SET_TEXT_FILTER':
            console.log(JSON.stringify(action.text));
            console.log(JSON.stringify(state.text));
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};

// Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter( (expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = text === '' || expense.description.toLowerCase().includes(text.toLowerCase());
        // console.log(text === '');
        // console.log(endDateMatch);
        // console.log(textMatch);
        
        return startDateMatch && endDateMatch && textMatch;
    }).sort( (a,b) => {
        if (sortBy === 'date') {
            return a.createdAt > b.createdAt ? 1 : -1;
        }
        else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    });
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe( () => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expense1 = store.dispatch(addExpense({description: 'leie', amount : 100, createdAt:-2350}));
const expense2 = store.dispatch(addExpense({description: 'sjokomelk', amount : 555, createdAt: 100}));

// store.dispatch(removeExpense({id : expense1.expense.id}));

// store.dispatch(editExpense(expense2.expense.id, {
//     amount: 500
// }));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(1300));
// store.dispatch(setEndDate());


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

const user = {
    name: 'Eiv',
    age: 32
};

console.log({
    ...user,
    age: 'Programming'
});

// console.log(user);