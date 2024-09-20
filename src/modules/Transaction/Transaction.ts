/**
 * @author Alex Söderberg <as228gc@student.lnu.se>
 * @module Transaction
 * @version 0.1
 */
import { ExpenseCategory } from "../../enums/ExpenseCategory"
import { IncomeCategory } from "../../enums/IncomeCategory"
import { TransactionType } from "../../enums/TransactionType"

/**
 * Represents a transaction.
 */
export class Transaction {
  #date: Date
  #amount: number
  #category: ExpenseCategory | IncomeCategory
  #type: TransactionType

  /**
   * 
   * @param date - The date the transaction is created.
   * @param {number} amount - The amount of money.
   * @param {TransactionType} type - Income or Expense. 
   * @param {ExpenseCategory | IncomeCategory} category - Either a expense-, or income category.
   * @throws {error}
   */
  constructor (
    date: Date,
    amount: number,
    type: TransactionType,
    category: ExpenseCategory | IncomeCategory 
  ) {

    // Check if the category is valid, with the given transaction type.
    this.validateCategory(category, type)
    this.validateAmount(amount)

    this.#date = date
    this.#amount = amount
    this.#category = category
    this.#type = type

  }

  /**
   * Check if the category is valid with the given transaction type.
   * 
   * @param { string } category - The category of income or expense.
   * @param { TransactionType } type - The type of transaction.
   * @throws { Error } - If the category is not of the right transaction type.
   */
  private validateCategory (category: string, type: TransactionType) {
    // If the transaction type is expense, and the transactions category is not in the expenses category.
    if (type === TransactionType.EXPENSE 
    && !(Object.values(ExpenseCategory).includes(category as ExpenseCategory))) {
      throw new Error('The entered category is not a valid expense category.')
    }
    // If the transaction type is income, but the category is not in the income category.
    else if (
      type === TransactionType.INCOME
      && !(Object.values(IncomeCategory).includes(category as IncomeCategory))){
        throw new Error('The entered category is not a valid income category.')
    }
  }

  /**
   * Validates the amount.
   * @param { number } amount - The amount of money the transaction handles.
   * @throws { Error } - The amount can not be less than 0.
   */
  private validateAmount (amount: number) {
    if (amount < 0 ) {
      throw new Error('The amount can not be less than 0.')
    }
  }

  //Getters
  
  /**
   * Returns the date of the transaction.
   * @returns { Date } - The date of the transaction.
   */
  public getDate(): Date {
    return this.#date
  }

  /**
   * Returns the amount of money the transaction handles.
   * @returns { number } - The amount of money the transaction handles.
   */
  public getAmount(): number {
    return this.#amount
  }

  /**
   * Returns the category of the transaction.
   * @returns { ExpenseCategory | IncomeCategory } - The category of the transaction.
   */
  public getCategory(): ExpenseCategory | IncomeCategory {
    return this.#category
  }

  /**
   * Returns the type of the transaction.
   * @returns { TransactionType } - The type of transaction.
   */
  public getType(): TransactionType {
    return this.#type
  }
}