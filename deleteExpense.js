const deleteExpense = ({id}={id}) => ({
    type:'DELETE_EXPENSE',
    id
});

export default deleteExpense;