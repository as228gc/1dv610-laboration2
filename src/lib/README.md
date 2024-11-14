# SummaryDTO
A type to hold data for summaries of expense- and income categories.

Example:
```ts
const summary: SummaryDTO = {
  expenseByCategory: new Map<ExpenseCategory, number>(),
  incomeByCategory: new Map<IncomeCategory, number>()
} 
```


# CategorySummaryDTO
A type to hold data for a category and the belonging value of that category.

Example:
```ts
const categorySummary: CategorySummaryDTO = {
  category: IncomeCategory.OTHER,
  totalAmount: 100
}
```