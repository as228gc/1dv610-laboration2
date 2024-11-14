# CategorySummarizer
The CategorySummarizer class is used to take an arrya of Transactions and process it to create an object containing maps with category and values belonging to the category.

### Dependencies
Classes:
* Transaction
* IncomeTransaction
* ExpenseTransaction
* SummaryDTO

Enums:
* ExpenseCategory
* IncomeCategory

## Public interface

### Constructor
Takes no arguments.

```js
const summarizer = new CategorySummarizer()
```

### summarizerCategories
Takes an argument of an array containing transactions. Processes the transactions and puts each category and the total value of each category into a map. Expenses is put into an expensesMap, and income is put into an incomeMap. The maps is put into a SummaryDTO which is returned.

Example: (assuming there is an array of Transaction declared with the name transactions, and a CategorySummarizer declared with the name summarizer)
```js
const summary = summarizer.summarizeCategories(transactions) // Returns a SummaryDTO 
```