# TransactionProcessor

The class is used to handle an array of transactions. The main responsibility is to filter the arrays to get certain kinds of transactions.
### Dependencies
Classes:
* Transaction

Enums:
* TransactionType
* ExpenseCategory
* IncomeCategory

### Constructor
Takes one argument
* Transactions - An array of transactions

## Public interface

### appendTransaction
Takes one argument - the transaction to add to the array

Example (assuming a TransactionProcessor instance named processor is created)
```
transaction = new Transaction(...) // Create new transaction
processor.appendTransaction(transaction)
```

### getTransactions
Returns a copy of the array of transactions

Example: (assuming a TransactionProcessor instance named processor is created)
```
processor.getTransactions() // Returns the array of transactions
```

### filterByTimeSpan
Arguments: 
* Date - The first date of the time span
* Date - The last date of the time span

Example: (assuming a TransactionProcessor instance named processor is created)
```
const startDate = new Date('2024-01-01')
const endDate = new Date('2024-12-12')
processor.filterByTimeSpan() // Returns the transactions with a date that occurs between startDate and endDate
```

### filterByCategory
Arguments:
* IncomeCategory or ExpenseCategory
Returns an array of transactions matching the given category.

Example: (assuming a TransactionProcessor instance named processor is created)
```
processor.filterByCategory(IncomeCategory.SALARY) // Returns an array of transactions of the category SALARY
```

### filterByType
Arguments:
* TransactionType - The type of transaction, INCOME or EXPENSE

Returns an array of transactions matching the given type.

Example: (assuming a TransactionProcessor instance named processor is created)
```
processor.filterByType(TransactionType.INCOME) // Returns an array of transactions of the type INCOME.
```

### sortByDate
Returns an array of transactions sorted by date. (First to last)

Example (assuming a TransactionProcessor instance named processor is created)
```
processor.sortByDate() // Returns a sorted array of transactions
```


