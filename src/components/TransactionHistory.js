import React from 'react'
import './TransactionHistory.css'
import { useSelector } from 'react-redux'


const TransactionHistory = () => {

let transactions = useSelector((store) => {
    return store.transactions.transactions
  })

  return (
    <div >
      <h3>Added Transactions</h3> 
      <ul className='list'>
        {
          transactions.map((transaction, ind)=>(
            <li key={ind} className='plus'>
                <div>{transaction.purpose}</div>
                <div>{transaction.amount}</div>
            </li>
          ))
        }
      </ul>
      <hr />
    </div>
  )
}

export default TransactionHistory
