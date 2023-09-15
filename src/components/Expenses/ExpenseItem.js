import React from 'react';

import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const Expenseitem = props => {

    // const [title, setTitle] = useState(props.expense.title);

    // const clickHandler = () => {
    //     setTitle("OTEN"); 
    //     console.log(title);
    // };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{ props.title }</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* <button onClick={clickHandler} >&#8369;</button> */}
        </Card>
    );
}

export default Expenseitem;