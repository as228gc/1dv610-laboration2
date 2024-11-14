# ExpenseTransaction
Inherits properties and methods from the Transaction class.
Represents an expense transaction.

### Dependencies
Classes: 
* Transaction

Enums:
* ExpenseCategory

### Constructor
Takes four arguments
* Date - The date the transaction is made
* Number - The amount of money the transaction covers
* String - An identifier of the transaction
* ExpenseCategory - The category of the expense

## Public interface

See the Transaction class for common transaction interface.

### getCategory
Returns the ExpenseCategory property of the class.

Example:
```js
const transaction = new ExpenseTransaction(
  new Date(),
  100,
  "transactionId1",
  ExpenseCategory.OTHER
  )
const category = transaction.getCategory() // => Returns ExpenseCategory.OTHER
```
