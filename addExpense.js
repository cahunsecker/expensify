import {v4 as uuidv4} from 'uuid';

const addExspense = ({note, amount, createdAt} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
    note: note,
    id: uuidv4(),
    amount: amount,
    createdAt
}

});

export default addExspense;