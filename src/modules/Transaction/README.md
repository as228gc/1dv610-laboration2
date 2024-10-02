# Transaction

### Dependencies

#### Enums
* TransactionType
* ExpenseCategory
* IncomeCategory


### Constructor

#### Parameters
* Date - The date of the transaction
* Amount - The amount of money the transaction involves
* Transaction type - The type of the transaction. (EXPENSE or INCOME, using the TransactionType enumeration)
* Category - Income category or Expense category. (Using the enumerations for IncomeCategory or ExpenseCategory)

Throws error if invalid category or amount is entered.
The entered category has to be of the correct transaction type. For example a transaction created as an expense can not be categorized as income.

* The amount has to be a positive number.

* There are two different types of transactions. INCOME and EXPENSE.

Example
```
const transaction = new Transaction(
  new Date(),
  100,
  TransactionTypes.INCOME,
  IncomeCategories.SALARY
)
```

## Public interface

### getDate
Returns which date the transaction is made.

Example: (assuming a transaction named transaction is already created)
```
transaction.getDate() // Returns the value of the date property of the instance
```

### getAmount
Returns the amount of money the transaction involves.

Example: (assuming a transaction named transaction is already created)
```
transaction.getAmount() // Returns the value of the amount property of the instance
```

### getCategory
Returns the category of the transaction.

Example: (assuming a transaction named transaction is already created)
```
transaction.getCategory() // Returns the category of type ExpenseCategory or IncomeCategory.
```

### getType
Returns the transaction type. Etiher EXPENSE or INCOME.

Example: (assuming a transaction named transaction is already created)
```
transaction.getType() // Returns the transaction type.
```
