import { ExpenseCategory } from "../src/enums/ExpenseCategory";
import { IncomeCategory } from "../src/enums/IncomeCategory";
import { TransactionType } from "../src/enums/TransactionType";
import { Report } from "../src/modules/Report/Report";
import { Transaction } from "../src/modules/Transaction/Transaction";

describe('Report class tests', () => {

  // Create transacitons array for expenses and income, to test Map.
  const transactions: Array<Transaction> = []

  // Create expense transactions
  for (let i = 0; i < 5; i++) {
    transactions.push(
      new Transaction(
        new Date(),
        100,
        TransactionType.EXPENSE,
        ExpenseCategory.FOOD
      )
    )
  }

  // Create income transactions
  for (let i = 0; i < 5; i++) {
    transactions.push(
      new Transaction(
        new Date(),
        100,
        TransactionType.INCOME,
        IncomeCategory.SALARY
      )
    )
  }

  const expensesMap: Map<ExpenseCategory, number> = new Map<ExpenseCategory, number>()
  const incomeMap: Map<IncomeCategory, number> = new Map<IncomeCategory, number>()

  // Could be a function, with parameters of type and category

  for (const transaction of transactions) {
    // Check if the transaction is of the type EXPENSE
    if (transaction.getType() === TransactionType.EXPENSE) {

      // If the key, value pair already exists in the Map,
      // add the value of the transaciton to correct key value pair
      if (expensesMap.has(transaction.getCategory() as ExpenseCategory)) {

        // Check if the value is currently undefined, if so, set the value to 0
        const currentValue = expensesMap.get(transaction.getCategory() as ExpenseCategory) || 0
        expensesMap
          .set(
            transaction.getCategory() as ExpenseCategory,

            // Add the value of the transaction to the category.
            currentValue + transaction.getAmount()
          )
      } else {
        expensesMap
          .set(
            transaction.getCategory() as ExpenseCategory,
            transaction.getAmount()
          )
      }
    } else if (transaction.getType() === TransactionType.INCOME) {
      if (incomeMap.has(transaction.getCategory() as IncomeCategory)) {

        // Check if the value is currently undefined, if so, set the value to 0
        const currentValue = incomeMap.get(transaction.getCategory() as IncomeCategory) || 0
        incomeMap
          .set(
            transaction.getCategory() as IncomeCategory,
            
            // Add the value of the transaction to the category.
            currentValue + transaction.getAmount()
          )
      } else {
        incomeMap
          .set(
            transaction.getCategory() as IncomeCategory,
            transaction.getAmount()
          )
      }
    }
  }

  it('should create a report instance with a correctly entered constructor', () => {
    const report = new Report(
      100,
      100,
      0,
      new Date(),
      new Date(),
      incomeMap,
      expensesMap
    )
    console.log(report.getExpensesByCategory())
    console.log(report.getIncomeByCategory())
  })
})