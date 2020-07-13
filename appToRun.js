import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/app-router';
import {Provider} from 'react-redux';
import expensifyStore from './store/expensifyStore';
import expensesReducer from './reducers/expensesReducer';
import filtersReducer from './reducers/filtersReducer';
import addExpense from './actions/addExpense';
import deleteExpense from './actions/deleteExpense';
import editExpense from './actions/editExpense';
import addExspense from './actions/addExpense';
import setTextFilter from './actions/setTextFilter';
import { sortByAmount, sortByDate } from './actions/sortBy';
import setStartDate  from './actions/setStartDate';
import setEndDate from './actions/setEndDate';
import getVisibleExpenses from './selectors/selector';
import 'normalize-css/normalize.css';
import './Styles/styles.scss';

const store = expensifyStore();

const state = store.getState();

store.subscribe(()=>console.log(store.getState()));

const firstExpense = store.dispatch(addExpense({note: 'water bill', amount: '1000', createdAt: -100}));
const secondExpense = store.dispatch(addExspense({note: 'tv bill', amount: '2000', createdAt: 100}));
const thirdExpense = store.dispatch(addExspense({note: 'school books', amount: '700000'}));

// store.dispatch(deleteExpense({id: firstExpense.expense.id}));

// store.dispatch(editExpense(secondExpense.expense.id, {note: 'phone bill'}));

store.dispatch(setTextFilter({text: 'book'}));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(0));
store.dispatch(setEndDate(1000));



const visibleExpenses = getVisibleExpenses(state.expenses, {...state.filters});

console.log(visibleExpenses);



// const state = store.getState();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

