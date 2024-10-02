# Report

The Report class represents a financial report. It summarizes entered value into a report represented as a string or in a JSON format. The class does not perform any calculations or maping of transactions. The methods of the class turns the entered values into a readable format.

### Dependencies
The class depends on using the enums "IncomeCategory" and "ExpenseCategory".

### Constructor

```
const report = new Report(
  1000, // Total income: number
  500, // Total expenses: number
  500, // Calculated net balance (income - expenses): number
  new Date('2024-01-01'), // The earliest occuring date of transactions: Date
  new Date('2024-12-30'), // The latest occuring date of transactions: Date
  const map = new Map<IncomeCategory, number>([
    [IncomeCategory.GIFT, 100]
  ]), // Map with income by category: Map<IncomeCategory, number>
  const map = new Map<ExpenseCategory, number>([
    [ExpenseCategory.FOOD, 100]
  ]) // Map with expenses by category: Map<ExpenseCategory, number>
)
```

## Public interface:

### toString()
Returns a string representation of the report instance.

```report.toString()```

### toJSON()
Returns a object in JSON format representing the report instance.

```report.toJSON()```

