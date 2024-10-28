import { Transaction } from "../src/modules/Transaction/Transaction";
import { TransactionType } from "../src/enums/TransactionType";
import { ExpenseCategory } from "../src/enums/ExpenseCategory";
import { IncomeCategory } from "../src/enums/IncomeCategory";
import { IncomeTransaction } from "../src/modules/Transaction/IncomeTransaction";
import { ExpenseTransaction } from "../src/modules/Transaction/ExpenseTransaction";

describe('Transaction class tests', () => {
  it('should create a transaction instance with a valid expense category', () => {
    const transaction = new ExpenseTransaction(
      new Date(),
      100,
      ExpenseCategory.FOOD
    )
    expect(transaction).toBeDefined()
  })

  it('should create a transaction instance with a valid income category', () => {
    const transaction = new IncomeTransaction(
      new Date(),
      100,
      IncomeCategory.SALARY
    )
    expect(transaction).toBeDefined()
  })

  // it('throws an error if a transaction instance is created with invalid expense category', () => {
  //   expect(() => {
  //     const transaction = new ExpenseTransaction(
  //       new Date(),
  //       100,
  //       IncomeCategory.SALARY
  //     )
  //   }).toThrow()
  // })

  // it('throws an error if a transaction instance is created with invalid income category', () => {
  //   expect(() => {
  //     const transaction = new IncomeTransaction(
  //       new Date(),
  //       100,
  //       ExpenseCategory.FOOD
  //     )
  //   }).toThrow()
  // })

  it('throws an error if a transaction instance entered with a negative amount.', () => {
    expect(() => {
      const transaction = new ExpenseTransaction(
        new Date(),
        -100,
        ExpenseCategory.FOOD
      )
    }).toThrow()
  })

  // Create transaction for testing the getters
  const validExpenseTransaction = new ExpenseTransaction(
    new Date(),
    100,
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
})