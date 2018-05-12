import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [{
    id: '1',
    description: 'gum',
    note: '',
    amount: 193,
    createdAt: 0
},
{
    id: '4',
    description: 'rent',
    note: '',
    amount: 22,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '5',
    description: 'beer',
    note: '',
    amount: 145,
    createdAt: moment(0).add(4, 'days').valueOf()
}];

test('should filer by text value', () => {
    const filters = {
        text: 'be',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2] ]);
});

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[2]]);
});


//should filter by endDate

test('should filter by enddate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[0]]);
});

//sort by date

test('sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[0], expenses[2]]);
});

//sort by amount

test('sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[2], expenses[1]]);
});