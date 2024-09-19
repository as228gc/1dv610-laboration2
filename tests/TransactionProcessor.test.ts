import { TransactionProcessor } from "../src/modules/TransactionProcessor/TransactionProcessor";
import { Transaction } from "../src/modules/Transaction/Transaction";
import { TransactionType } from "../src/enums/TransactionType";
import { ExpenseCategory } from "../src/enums/ExpenseCategory";
import { IncomeCategory } from "../src/enums/IncomeCategory";

describe('TransactionProcessor class test', () => {
  // Create a test array of transactions
  const transactions: Array<Transaction> = []

  // Create expense transactions
  for (let i = 0; i < 5; i++) {
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
  for (let i = 0; i < 5; i++) {
    transactions.push(new Transaction(
      new Date(),
      100,
      TransactionType.INCOME,
      IncomeCategory.SALARY
    ))
  }

  it('creates a TransactionProcessor instance', () => {
    const transactionProcessor = new TransactionProcessor(transactions)
    expect(transactionProcessor).toBeDefined()
  })

  it('returns the total amount of expenses', () => {
    const transactionProcessor = new TransactionProcessor(transactions)
    let totalExpenses = transactionProcessor.getTotalExpenses()
    expect(totalExpenses).toEqual(500)
  })

  it('returns the total amount of income', () => {
    const transactionProcessor = new TransactionProcessor(transactions)
    let totalIncome = transactionProcessor.getTotalIncome()
    expect(totalIncome).toEqual(500)
  })

  it('returns an array of transactions of the expense category', () => {
    const transactionProcessor = new TransactionProcessor(transactions)
    expect(
      transactionProcessor
      .getTransactionsByCategory(ExpenseCategory.FOOD)
    ).toEqual(
      transactions.slice(0, 5)
    )
  })

  it('returns an array of transactions of the income category', () => {
    const transactionProcessor = new TransactionProcessor(transactions)
    console.log(transactionProcessor.getTransactionsByCategory(IncomeCategory.SALARY))
    expect(
      transactionProcessor
      .getTransactionsByCategory(IncomeCategory.SALARY)
    ).toEqual(
      transactions.slice(5, 10)
    )
  })
})