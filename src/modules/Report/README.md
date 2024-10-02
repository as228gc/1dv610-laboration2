# Report

The Report class represents a financial report. It summarizes entered value into a report represented as a string or in a JSON format. The class does not perform any calculations or maping of transactions. The methods of the class turns the entered values into a readable format.

### Dependencies
The class depends on using the enums "IncomeCategory" and "ExpenseCategory".

### Constructor
Arguments:
* Total income - The total income of the transactions
* Total expenses - The total expenses of the transactions
* Net balance - The net balance of the transactions
* First Date - The first occuring date of the transactions
* Last Date - The last occuring date of the transactions
* Income Map - A map containing the summarized income for each category
* Expense Map - A map containing the summarized expenses for each category.

```
const report = new Report(
  1000, // Total income
  500, // Total expenses
  500, // Net balance (income - expenses)
  new Date('2024-01-01'), // The earliest occuring date of transactions
  new Date('2024-12-30'), // The latest occuring date of transactions
  const map = new Map<IncomeCategory, number>([
    [IncomeCategory.GIFT, 100]
  ]), // Map with income by category
  const map = new Map<ExpenseCategory, number>([
    [ExpenseCategory.FOOD, 100]
  ]) // Map with expenses by category
)
```

## Public interface:

### toString()
Returns a string representation of the report instance.

```report.toString()```

### toJSON()
Returns a object in JSON format representing the report instance.

```report.toJSON()```

