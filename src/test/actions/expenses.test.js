import {addExpense, removeExpense, editExpense} from '../../actions/expenses';
import expenses from '../../reducers/expenses';

test('Tester removeExpense', () => {
    const action = removeExpense({id:'1234'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'1234'
    });
});

test('Tester editExpense', () => {
    const action = editExpense('abc2', {note:'notatstuff'});
    expect(action).toEqual({type: 'EDIT_EXPENSE',
    id:'abc2',
    updates:{
        note:'notatstuff'}})
});

test('Should setup add expense action with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 100,
        createdAt: 1000,
        note:'notat'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('Should setup add expense action with default values', () => {
    const expenseData = {
        description: '',
        amount: 0,
        createdAt: 0,
        note:''
    };
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
})