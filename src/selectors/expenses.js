// Get visible expenses
import moment from 'moment';

export default (expenses, {text, sortBy, startDate, endDate}) => {
    // console.log('Kom inn her');
    // console.log(JSON.stringify(expenses));
    // console.log(text);
    return expenses.filter( (expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = text === '' || expense.description.toLowerCase().includes(text.toLowerCase());
        // console.log(text === '');
        
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