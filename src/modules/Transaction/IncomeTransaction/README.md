# IncomeTransaction
Inherits properties and methods from the Transaction class.
Represents an income transaction.

### Dependencies
Classes: 
* Transaction

Enums:
* IncomeCategory

### Constructor
Takes four arguments
* Date - The date the transaction is made
* Number - The amount of money the transaction covers
* String - An identifier of the transaction
* IncomeCategory - The category of the income

## Public interface

See the Transaction class for common transaction interface.

### getCategory
Returns the IncomeCategory property of the class.

Example:
```js
const transaction = new IncomeTransaction(
  new Date(),
  100,
  "transactionId1",
  IncomeCategory.OTHER
  )
const category = transaction.getCategory() // => Returns IncomeCategory.OTHER
```
