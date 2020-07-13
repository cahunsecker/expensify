import {v4 as uuidv4} from 'uuid';

const defaultState = {
    expenses:{
        note: 'Rent',
        id: uuidv4(),
        amount: '20000',
        createdAt:0,
    }  
    
}



const expensesReducer = (state=[], action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            console.log('add expense is running');
            return [
                ...state,
                action.expense
            ];
        case 'DELETE_EXPENSE':
            return state.filter(({id})=>id !== action.id);
            
        case 'EDIT_EXPENSE': 
                return state.map((expense)=> {
                    if (expense.id===action.id){
                        return {
                            ...expense,
                            note: action.note,
                            amount: action.amount,
                            createdAt: action.createdAt
                        }
                    }
                    else {
                        return expense;
                    }
                });          
        default: 
            return state;

    }
}

export default expensesReducer;