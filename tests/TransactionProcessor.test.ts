import { TransactionProcessor } from "../src/modules/TransactionProcessor/TransactionProcessor";
import { Transaction } from "../src/modules/Transaction/Transaction";
import { TransactionType } from "../src/enums/TransactionType";
import { ExpenseCategory } from "../src/enums/ExpenseCategory";
import { IncomeCategory } from "../src/enums/IncomeCategory";

describe('TransactionProcessor class test', () => {
  // Create a test array of transactions
  const transactions: Array<Transaction> = []

  // Create expense transactions in the category FOOD
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

  // Create income transactions in the category SALARY
  for (let i = 0; i < 5; i++) {
    transactions.push(new Transaction(
      new Date(),
      100,
      TransactionType.INCOME,
      IncomeCategory.SALARY
    ))
  }

  // Create expense transactions in the category OTHER
  for (let i = 0; i < 5; i++) {
    transactions.push(new Transaction(
      new Date(),
      100,
      TransactionType.EXPENSE,
      ExpenseCategory.OTHER
    ))
  }

  for (let i = 0; i < 5; i++) {
    transactions.push(new Transaction(
      new Date(),
      100,
      TransactionType.INCOME,
      IncomeCategory.GIFT
    ))
  }

  it('creates a TransactionProcessor instance', () => {
    const transactionProcessor = new TransactionProcessor(transactions)
    expect(transactionProcessor).toBeDefined()
  })

  it('returns the total amount of expenses', () => {
    const transactionProcessor = new TransactionProcessor(transactions)
    let totalExpenses = transactionProcessor.getTotalExpenses()
    expect(totalExpenses).toEqual(1000)
  })

  it('returns the total amount of income', () => {
    const transactionProcessor = new TransactionProcessor(transactions)
    let totalIncome = transactionProcessor.getTotalIncome()
    expect(totalIncome).toEqual(1000)
  })

  it('returns an array of transactions of the expense category FOOD', () => {
    const transactionProcessor = new TransactionProcessor(transactions)
    expect(
      transactionProcessor
      .getTransactionsByCategory(ExpenseCategory.FOOD)
    ).toEqual(
      transactions.slice(0, 5)
    )
  })

  it('returns an array of transactions of the income category SALARY', () => {
    const transactionProcessor = new TransactionProcessor(transactions)
    expect(
      transactionProcessor
      .getTransactionsByCategory(IncomeCategory.SALARY)
    ).toEqual(
      transactions.slice(5, 10)
    )
  })

  it('returns an array of transactions of the transaction type EXPENSE', () => {
    const transactionProcessor = new TransactionProcessor(transactions)
    expect(
      transactionProcessor
      .getTransactionsByType(TransactionType.EXPENSE)
    ).toEqual(
      transactions.slice(0, 5).concat(transactions.slice(10, 15))
    )
  })

  it('returns an array of transactions of the transaction type INCOME', () => {
    const transactionProcessor = new TransactionProcessor(transactions)
    expect(
      transactionProcessor
      .getTransactionsByType(TransactionType.INCOME)
    ).toEqual(
      transactions.slice(5, 10).concat(transactions.slice(15, 20))
    )
  })
})