import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/selector';

const ExpenseList = (props) => (
    <div>
        <p>Here are some expenses</p>
        {props.expenses.map((expense)=> <ListItem key={expense.id} {...expense} />)}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList);
