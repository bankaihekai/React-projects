import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpenseData(expenseData);
        setIsEditing(false);
    };

    const editingFunction = () => {
        setIsEditing(true);
    };

    const cancelEditingFunction = () => {
        setIsEditing(false);
    };

    return(
        <div className="new-expense">
            {!isEditing && (
                <button onClick={editingFunction}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelEditing={cancelEditingFunction}/>
            )}
            
        </div>
    );
};

export default NewExpense;