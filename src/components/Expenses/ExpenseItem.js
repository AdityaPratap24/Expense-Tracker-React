import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title,setTitle] = useState(props.title);
  const[amount,setAmount] = useState(props.amount);
  
  const clickHandler = () => {
    setTitle('Updated')
    console.log('Clicked')
  }

  const deleteTitle = () => {
    console.log('Delete')
  }

  const add = () => {
    setAmount(100);
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
        <button onClick={add}>Add Expense</button>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteTitle}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;