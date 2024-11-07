/**
 * @author Alex Söderberg <as228gc@student.lnu.se>
 * @module Transaction
 * @version 0.1
 */
import { ExpenseCategory } from "../../enums/ExpenseCategory"
import { IncomeCategory } from "../../enums/IncomeCategory"

/**
 * Represents a transaction.
 */
export abstract class Transaction {
  private date: Date
  private amount: number

  /**
   * 
   * @param date - The date the transaction is created.
   * @param {number} amount - The amount of money.
   * @throws {error}
   */
  constructor (
    date: Date,
    amount: number,
  ) {
    this.validateAmount(amount)

    this.date = date
    this.amount = amount
  }

  /**
   * Validates the amount.
   * @param { number } amount - The amount of money the transaction handles.
   * @throws { Error } - The amount can not be less than 0.
   */
  private validateAmount (amount: number) {
    if (amount < 0 ) {
      throw new Error('The amount can not be less than 0.')
    }
  }
  
  /**
   * Returns the date of the transaction.
   * @returns { Date } - The date of the transaction.
   */
  public getDate(): Date {
    return this.date
  }

  /**
   * Returns the amount of money the transaction handles.
   * @returns { number } - The amount of money the transaction handles.
   */
  public getAmount(): number {
    return this.amount
  }

  /**
   * Returns the category of the transaction.
   * @returns { ExpenseCategory | IncomeCategory } - The category of the transaction.
   */
  public abstract getCategory(): ExpenseCategory | IncomeCategory
}