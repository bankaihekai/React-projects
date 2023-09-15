import React from "react";

import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const filteredExpense = props.items;

  if (filteredExpense.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses.</h2>
  }
 
  return (
    <ul className="expenses-list">
      {filteredExpense.map((i) => (
            <ExpenseItem
              key={i.id}
              title={i.title}
              amount={i.amount}
              date={i.date}
            />
          ))}
    </ul>
  );
};

export default ExpensesList;
