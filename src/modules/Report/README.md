# Report

The Report class represents a financial report. It summarizes entered value into a report represented as a string or in a JSON format. The class does not perform any calculations or maping of transactions. The methods of the class turns the entered values into a readable format.

### Dependencies
Class:
* CategorySummaryDTO
* SummaryDTO

Enums:
* IncomeCategory
* ExpenseCategory

### Constructor
Arguments:
* Number - The total income of the transactions
* Number - The total expenses of the transactions
* Number- The net balance of the transactions
* Date - The first occuring date of the transactions
* Date - The last occuring date of the transactions
* SummaryDTO - An object that represents a summary of transactions by category and value of each category.

Example: (assuming there is a SummaryDTO instance declared with the name summaryDTO)
```js
const report = new Report(
  1000, // Total income
  500, // Total expenses
  500, // Net balance (income - expenses)
  new Date('2024-01-01'), // The earliest occuring date of transactions
  new Date('2024-12-30'), // The latest occuring date of transactions
  summaryDTO // An instance representing the maps of expense- and income categories with belonging values.
)
```

## Public interface:

### getTotalIncome
Returns the class property that represents the total income.

Example: (assuming there is a Report instance declared with name report)
```js
const totalIncome = report.getTotalIncome() // => Returns the total income that the report covers
```

### getTotalExpenses
Returns the class property that represents the total expenses.

Example: (assuming there is a Report instance declared with name report)
```js
const totalExpenses = report.getTotalExpenses() // => Returns the total income that the report covers
```

### getNetBalance
Returns the class property that represents the net balance.

Example: (assuming there is a Report instance declared with name report)
```js
const netBalance = report.getNetBalance() // => Returns the net balance
```

### getStartDate
Returns the class property that represents the earlist date of transactions covered by the report. The returning value is of type Date.

Example: (assuming there is a Report instance declared with name report)
```js
const startDate = report.getStartDate()
```

### getEndDate
Returns the class property that represents the last date of transactions covered by the report. The returning vlaue is of type Date.

Example: (assuming there is a Report instance declared with name report)
```js
const endDate = report.getEndDate()
```

### getExpensesByCategory
Returns a CategorySummaryDTO instance, which includes each expense category and with the belonging value of that category.

Example: (assuming there is a Report instance declared with name report)
```js
const expensesByCategory = report.getExpensesByCategory() // => Returns a CategorySummaryDTO
```

### getIncomeByCategory
Returns a CategorySummaryDTO instance, which includes each income category and with the belonging value of that category.

Example: (assuming there is a Report instance declared with name report)
```js
const incomeByCategory = report.getIncomeByCategory() // => Returns a CategorySummaryDTO
```

### toString
Returns a string representation of the report instance.

Example:
```js
report.toString()
```

### toJSON
Returns a object in JSON format representing the report instance.

Example:
```js
report.toJSON()
```

