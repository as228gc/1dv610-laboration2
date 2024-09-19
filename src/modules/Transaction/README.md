# Transaction

## To create a transaction

* The amount has to be a positive number.

* There are two different types of transactions. Income and expense.

* The entered category has to be of the correct transaction type. For example a transaction created as an expense can not be categorized as income.


Code example

``` const transaction = new Transaction(
  new Date(),
  100,
  TransactionTypes.INCOME,
  IncomeCategories.SALARY
)
```