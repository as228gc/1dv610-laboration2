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

  for (let i = 0; i < 4; i++) {
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

  it('returns a copy of the array of transactions', () => {
    const transactionProcessor = new TransactionProcessor(transactions)
    expect(transactionProcessor.getTransactions()).toEqual(transactions)
  })

  it('adds a transaction to the array of transactions', () => {
    const transactionProcessor = new TransactionProcessor(transactions)
    transactionProcessor.addTransaction(new Transaction(
      new Date(),
      100,
      TransactionType.INCOME,
      IncomeCategory.GIFT
    ))
    expect(transactions)
  })

  it('returns an array of transactions of the expense category FOOD', () => {
    const transactionProcessor = new TransactionProcessor(transactions)
    expect(
      transactionProcessor
      .filterTransactionsByCategory(ExpenseCategory.FOOD)
    ).toEqual(
      transactions.slice(0, 5)
    )
  })

  it('returns an array of transactions of the income category SALARY', () => {
    const transactionProcessor = new TransactionProcessor(transactions)
    expect(
      transactionProcessor
      .filterTransactionsByCategory(IncomeCategory.SALARY)
    ).toEqual(
      transactions.slice(5, 10)
    )
  })

  it('returns an array of transactions of the transaction type EXPENSE', () => {
    const transactionProcessor = new TransactionProcessor(transactions)
    expect(
      transactionProcessor
      .filterTransactionsByType(TransactionType.EXPENSE)
    ).toEqual(
      transactions.slice(0, 5).concat(transactions.slice(10, 15))
    )
  })

  it('returns an array of transactions of the transaction type INCOME', () => {
    const transactionProcessor = new TransactionProcessor(transactions)
    expect(
      transactionProcessor.filterTransactionsByType(TransactionType.INCOME)
    ).toEqual(
      transactions.slice(5, 10).concat(transactions.slice(15, 20))
    )
  })
})