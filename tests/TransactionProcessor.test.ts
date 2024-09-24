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
      .filterByCategory(ExpenseCategory.FOOD)
    ).toEqual(
      transactions.slice(0, 5)
    )
  })

  it('returns an array of transactions of the income category SALARY', () => {
    const transactionProcessor = new TransactionProcessor(transactions)
    expect(
      transactionProcessor
      .filterByCategory(IncomeCategory.SALARY)
    ).toEqual(
      transactions.slice(5, 10)
    )
  })

  it('returns an array of transactions of the transaction type EXPENSE', () => {
    const transactionProcessor = new TransactionProcessor(transactions)
    expect(
      transactionProcessor
      .filterByType(TransactionType.EXPENSE)
    ).toEqual(
      transactions.slice(0, 5).concat(transactions.slice(10, 15))
    )
  })

  it('returns an array of transactions of the transaction type INCOME', () => {
    const transactionProcessor = new TransactionProcessor(transactions)
    expect(
      transactionProcessor.filterByType(TransactionType.INCOME)
    ).toEqual(
      transactions.slice(5, 10).concat(transactions.slice(15, 20))
    )
  })

  it('sorts an array of transaction by date', () => {
    const transactionsMock: Array<Transaction> = new Array<Transaction>
    // Create three transactions with different dates.
    const transaction1 = new Transaction(
      new Date('2024-09-23'),
      100,
      TransactionType.EXPENSE,
      ExpenseCategory.FOOD
    )

    const transaction2 = new Transaction(
      new Date('2024-09-21'),
      100,
      TransactionType.EXPENSE,
      ExpenseCategory.FOOD
    )

    const transaction3 = new Transaction(
      new Date('2024-09-22'),
      100,
      TransactionType.EXPENSE,
      ExpenseCategory.FOOD
    )

    // Create Processor item with array of unsorted transactions
    transactionsMock.push(transaction1)
    transactionsMock.push(transaction2)
    transactionsMock.push(transaction3)

    const processor = new TransactionProcessor(transactionsMock)

    // Compare first element of sorted array to transaction with earliest date.
    expect(processor.sortByDate()[0]).toEqual(transaction2)

    // Empty array
    while (transactionsMock.length > 0) {
      transactionsMock.pop()
    }

    // Add the transactions in order by date before comparison
    transactionsMock.push(transaction2, transaction3, transaction1)

    // Compare transaction arrays
    expect(processor.sortByDate()).toEqual(transactionsMock)
  })
})