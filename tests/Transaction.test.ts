import { Transaction } from "../src/modules/Transaction/Transaction";
import { TransactionType } from "../src/enums/TransactionType";
import { ExpenseCategory } from "../src/enums/ExpenseCategory";
import { IncomeCategory } from "../src/enums/IncomeCategory";

describe('Transaction class tests', () => {
  it('should create a transaction instance with a valid expense category', () => {
    const transaction = new Transaction(
      new Date(),
      100,
      TransactionType.EXPENSE,
      ExpenseCategory.FOOD
    )
    expect(transaction).toBeDefined()
  })

  it('should create a transaction instance with a valid income category', () => {
    const transaction = new Transaction(
      new Date(),
      100,
      TransactionType.INCOME,
      IncomeCategory.SALARY
    )
    expect(transaction).toBeDefined()
  })

  it('throws an error if a transaction instance is created with invalid expense category', () => {
    expect(() => {
      const transaction = new Transaction(
        new Date(),
        100,
        TransactionType.EXPENSE,
        IncomeCategory.SALARY
      )
    }).toThrow()
  })

  it('throws an error if a transaction instance is created with invalid income category', () => {
    expect(() => {
      const transaction = new Transaction(
        new Date(),
        100,
        TransactionType.INCOME,
        ExpenseCategory.FOOD
      )
    }).toThrow()
  })

  it('throws an error if a transaction instance entered with a negative amount.', () => {
    expect(() => {
      const transaction = new Transaction(
        new Date(),
        -100,
        TransactionType.EXPENSE,
        ExpenseCategory.FOOD
      )
    }).toThrow()
  })

  // Create transaction for testing the getters
  const validExpenseTransaction = new Transaction(
    new Date(),
    100,
    TransactionType.EXPENSE,
    ExpenseCategory.FOOD
  )

  it('returns the date of the transaction', () => {
    expect(validExpenseTransaction.getDate()).toBeInstanceOf(Date)
  })

  it('returns the amount of money in the transaction', () => {
    expect(validExpenseTransaction.getAmount()).toEqual(100)
  })

  it('returns the category of the transaction', () => {
    expect(validExpenseTransaction.getCategory()).toEqual('food' as ExpenseCategory)
  })

  it('returns the type of the transaction', () => {
    expect(validExpenseTransaction.getType()).toEqual('expense' as TransactionType)
  })
})