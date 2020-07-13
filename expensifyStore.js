import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expensesReducer';
import filtersReducer from '../reducers/filtersReducer';
import addExpense from '../actions/addExpense';
import deleteExpense from '../actions/deleteExpense';
import editExpense from '../actions/editExpense';
import addExspense from '../actions/addExpense';
import setTextFilter from '../actions/setTextFilter';
import { sortByAmount, sortByDate } from '../actions/sortBy';
import  setStartDate from '../actions/setStartDate';
import getVisibleExpenses from '../selectors/selector';

export default () => {
    const store = createStore(combineReducers({expenses: expensesReducer, filters: filtersReducer}));
    return store
}

const store = createStore(combineReducers({expenses: expensesReducer, filters: filtersReducer}));

 

// store.subscribe(()=>console.log(store.getState()));


// const firstExpense = store.dispatch(addExpense({note: 'water bill', amount: '1000', dateAdded: 2}));
// const secondExpense = store.dispatch(addExspense({note: 'tv bill', amount: '2000', dateAdded: 5}));
// const thirdExpense = store.dispatch(addExspense({note: 'school books', amount: '700000'}));


// store.dispatch(deleteExpense({id: firstExpense.expense.id}));

// store.dispatch(editExpense(secondExpense.expense.id, {note: 'phone bill'}));

// store.dispatch(setTextFilter({text: 'bill'}));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(1000));

//const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

//console.log(visibleExpenses);


