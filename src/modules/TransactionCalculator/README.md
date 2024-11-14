# TransactionCalculator
The TransactionCalculator class is used to calculate income and expenses of transactions in an array.

### Dependencies

Classes:
* TransactionProcessor
* IncomeTransaction
* ExpenseTransaction
* Transaction

### Constructor
Takes one argument
* TransactionProcessor - A TransactionProcessor instance

## Public interface

### calculateTotalNetBalance
Calculates and returns the net balance of all transactions in the TransactionProcessor instance.

Example: (Assuming theres a TransactionCalculator declared with name calculator)
```js
const netBalance = calculator.calculateTotalNetBalance() // => Returns the total net balance
```

### calculateTotalIncome
Calculates and returns the total income of all transactions in the TransactionProcessor instance.

Example: (Assuming theres a TransactionCalculator declared with name calculator)
```js
const totalIncome = calculator.calculateTotalIncome() // => Returns the total income
```

### calculateTotalExpenses
Calculates and returns the total expenses of all transactions in the TransactionProcessor instance.

Example: (Assuming theres a TransactionCalculator declared with name calculator)
```js
const totalExpenses = calculator.calculateTotalExpenses() // => Returns the total expenses
```

### calculateNetBalanceInTimeSpan
Takes two arguments.
* Date - The first occuring date to include when selecting transactions to operate on.
* Date - The last occuring date to include when selecting transactions to operate on.

Calculates and returns the net balance of transactions made in a specific time span.

Example: (Assuming theres a TransactionCalculator declared with name calculator)
```js
const startDate = new Date("2024-01-01")
const endDate = new Date("2024-12-31")
const netBalance = calculator.calculateNetBalanceInTimeSpan(startDate, endDate) // => Returns the total net balance of all transactions made in 2024
```

### calculateIncomeInTimeSpan
Takes two arguments.
* Date - The first occuring date to include when selecting transactions to operate on.
* Date - The last occuring date to include when selecting transactions to operate on.

Calculates and returns the total income of transactions made in a specific time span.

Example: (Assuming theres a TransactionCalculator declared with name calculator)
```js
const startDate = new Date("2024-01-01")
const endDate = new Date("2024-12-31")
const netBalance = calculator.calculateIncomeInTimeSpan(startDate, endDate) // => Returns the total income of all transactions made in 2024
```

### calculateExpensesInTimeSpan
Takes two arguments.
* Date - The first occuring date to include when selecting transactions to operate on.
* Date - The last occuring date to include when selecting transactions to operate on.

Calculates and returns the total expenses of transactions made in a specific time span.

Example: (Assuming theres a TransactionCalculator declared with name calculator)
```js
const startDate = new Date("2024-01-01")
const endDate = new Date("2024-12-31")
const netBalance = calculator.calculateNetBalanceInTimeSpan(startDate, endDate) // => Returns the total expenses of all transactions made in 2024
```
