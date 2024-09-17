/**
 * @author Alex Söderberg <as228gc@student.lnu.se>
 */
import { ExpenseCategories } from "../../enums/ExpenseCategories"
import { IncomeCategories } from "../../enums/IncomeCategories"
import { TransactionTypes } from "../../enums/TransactionTypes"

/**
 * Represents a transaction.
 * 
 */
export class Transaction {
  #date: Date
  #amount: number
  #category: ExpenseCategories | IncomeCategories
  #type: TransactionTypes

  /**
   * 
   * @param date
   * @param {number} amount - The amount of money.
   * @param {TransactionTypes} type - Income or Expense. 
   * @param {ExpenseCategories | IncomeCategories} category - Either a expense-, or income category.
   * @throws {error}
   */
  constructor (
    date: Date,
    amount: number,
    type: TransactionTypes,
    category: ExpenseCategories | IncomeCategories ) {

    this.#date = date
    this.#amount = amount
    this.#category = category
    this.#type = type

    // Check if the category is valid, with the given transaction type.
    this.validateCategory(this.#category, this.#type)
  }

  /**
   * Check if the category is valid with the given transaction type.
   * 
   * @param {string} category - The category of income or expense.
   * @param {TransactionTypes} type - The type of transaction.
   * @throws {Error} - If the category is not of the right transaction type.
   */
  private validateCategory (category: string, type: TransactionTypes) {
    // If the transaction type is expense, and the transactions category is not in the expenses category.
    if (type === TransactionTypes.EXPENSE 
    && !(Object.values(ExpenseCategories).includes(category as ExpenseCategories))) {
      throw new Error('The entered category is not a valid expense category.')
    }
    // If the transaction type is income, but the category is not in the income category.
    else if (
      type === TransactionTypes.INCOME
      && !(Object.values(IncomeCategories).includes(category as IncomeCategories))){
        throw new Error('The entered category is not a valid income category.')
    }
  }
}