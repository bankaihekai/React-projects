import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [year, setFilterYear] = useState("2023");

  const setFilterValue = (enteredYear) => {
    setFilterYear(enteredYear);
    // console.log(year); // data from useState
    // console.log(enteredYear); // passed data from expenseFilter
  };

  const filteredExpense = props.item.filter((i) => {
    return i.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterHandler={setFilterValue} defaultYear={year} />
      <ExpensesChart expenses={filteredExpense}/>
      <ExpensesList items={filteredExpense}/>
    </Card>
  );
};

export default Expenses;
