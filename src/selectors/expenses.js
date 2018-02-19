// Get visible expenses
export default (expenses, {text, sortBy, startDate, endDate}) => {
    // console.log('Kom inn her');
    // console.log(JSON.stringify(expenses));
    // console.log(text);
    return expenses.filter( (expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = text === '' || expense.description.toLowerCase().includes(text.toLowerCase());
        // console.log(text === '');
        console.log(startDateMatch);
        console.log(endDateMatch);
        console.log(textMatch);
        
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