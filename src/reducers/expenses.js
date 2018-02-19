//Expenses Reducer
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    // console.log(JSON.stringify(action));
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

