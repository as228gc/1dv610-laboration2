import { Transaction } from "../src/modules/Transaction/Transaction";
import { TransactionTypes } from "../src/enums/TransactionTypes";
import { ExpenseCategories } from "../src/enums/ExpenseCategories";
import { IncomeCategories } from "../src/enums/IncomeCategories";

describe('Transaction class tests', () => {
  it('should create a transaction instance with a valid expense category', () => {
    const transaction = new Transaction(
      new Date(),
      100,
      TransactionTypes.EXPENSE,
      ExpenseCategories.FOOD
    )
    expect(transaction).toBeDefined()
  })

  it('should create a transaction instance with a valid income category', () => {
    const transaction = new Transaction(
      new Date(),
      100,
      TransactionTypes.INCOME,
      IncomeCategories.SALARY
    )
    expect(transaction).toBeDefined()
  })

  it('throws an error if a transaction instance is created with invalid expense category', () => {
    expect(() => {
      const transaction = new Transaction(
        new Date(),
        100,
        TransactionTypes.EXPENSE,
        IncomeCategories.SALARY
      )
    }).toThrow()
  })

  it('throws an error if a transaction instance is created with invalid income category', () => {
    expect(() => {
      const transaction = new Transaction(
        new Date(),
        100,
        TransactionTypes.INCOME,
        ExpenseCategories.FOOD
      )
    }).toThrow()
  })

  it('throws an error if a transaction instance entered with a negative amount.', () => {
    expect(() => {
      const transaction = new Transaction(
        new Date(),
        -100,
        TransactionTypes.EXPENSE,
        ExpenseCategories.FOOD
      )
    }).toThrow()
  })
})