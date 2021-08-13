import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import expenses from '../constants/constant'

function ExpenseItem() {
    return (
        <>
        {expenses.map(({expenseDate,expenseTitle,expenseAmount},i)=>(
            <div key={i} className="expense-item">
                <ExpenseDate date={expenseDate}/>
                <div className="expense-item__description">
                    <h2>{expenseTitle}</h2>
                </div>
                <div className="expense-item__price">${expenseAmount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</div>
            </div>
            ))}
        </>
    )
}

export default ExpenseItem
