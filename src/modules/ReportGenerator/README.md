# ReportGenerator

The ReportGenerator class calculates and summarizes an array of transactions. With the calculated data, it is able to generate a report to summarize the transactions.

### Dependencies
Classes:
* TransactionProcessor
* Report

Enums: 
* TransactionType
* IncomeCategory
* ExpenseCategory 

### Constructor
Takes an argument of a TransactionProcessor.

Example (assuming there is already a declared TransactionProcessor called processor)

```
const generator = new ReportGenerator(processor)
```

## Public interface:

### calculateIncome
Calculates the total income of the transactions in the range of dates.

Takes two argument of the type Date, startDate and endDate, which represents the range of time. If a transaction has a date proprty which is inside the range of dates, the transaction should be included in the calculation.
The method returns the total income of transactions made between the start date and end date.

Example: (assuming there is already a declared TransactionProcessor called processor)
```
const startDate = new Date('2024-09-10')
const endDate = new Date('2024-09-30')
const generator = new ReportGenerator(processor)
generator.calculateIncome(startDate, endDate) // Returns the total income between 2024-09-10 and 2024-09-30
```


### calculateExpenses

Takes two argument of the type Date, startDate and endDate, which represents the range of time. If a transaction has a date proprty which is inside the range of dates, the transaction should be included in the calculation.
The method returns the total expenses of transactions made between the start date and end date.

Example: (assuming there is already a declared TransactionProcessor called processor)
```
const startDate = new Date('2024-09-10')
const endDate = new Date('2024-09-30')
const generator = new ReportGenerator(processor)
generator.calculateExpenses(startDate, endDate) // Returns the total expenses between 2024-09-10 and 2024-09-30
```


### calculateNetBalance

Takes two argument of the type Date, startDate and endDate, which represents the range of time. If a transaction has a date proprty which is inside the range of dates, the transaction should be included in the calculation.
The method returns the total net balance of transactions made between the start date and end date.

Example: (assuming there is already a declared TransactionProcessor called processor)
```
const startDate = new Date('2024-09-10')
const endDate = new Date('2024-09-30')
const generator = new ReportGenerator(processor)
generator.calculateNetBalance(startDate, endDate) // Returns the net balance of the transactions made between 2024-09-10 and 2024-09-30
```

### generateReport
Returns a Report object that covers all transactions from the TransactionProcessor.

Example:
```
const generator = new ReportGenerator(processor)
generator.generateReport() // Returns a Report instance representing a report of all transactions of the TransactionProcessor
```


## Comments
The private method summarizeCategories returns a value of type "any". The reason is to be able to access the properties from the object the method returns.
