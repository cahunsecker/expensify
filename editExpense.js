import state from '../store/expensifyStore';
 
const editExpense = (id, {note= state.note}) => ({
    type: 'EDIT_EXPENSE',
    id,
    note
});

export default editExpense;