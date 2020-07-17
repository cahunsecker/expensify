import React from 'react';
import {connect} from 'react-redux';
import deleteExpense from '../actions/deleteExpense';

const ListItem = ({dispatch, id, note, amount, createdAt}) => {
    return (
        <div>
            <h3>{note}</h3>
            <p>{amount}-{createdAt}</p>
            <button onSubmit={()=>
                dispatch(deleteExpense({id: id}))}>Remove</button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
        expenses: state.expenses
    }
}

export default connect()(ListItem)


