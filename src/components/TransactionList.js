

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function TransactionList() {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  const handleDelete = (id) => {
    deleteTransaction(id);
  };

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{transaction.amount}</span>
            <button className="delete-btn" onClick={() => handleDelete(transaction.id)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
