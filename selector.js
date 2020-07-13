const getVisibleExpenses = (expenses, {text, startDate, endDate}) => {

    return expenses.filter((expense) => {
        console.log(expense.note);

        const textMatch= expense.note.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate ;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;


        return textMatch && startDateMatch && endDateMatch;
    })
   
};
export default getVisibleExpenses;