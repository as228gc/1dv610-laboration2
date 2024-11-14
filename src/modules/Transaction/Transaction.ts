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
  private id: string

  /**
   * 
   * @param date - The date the transaction is created.
   * @param {number} amount - The amount of money.
   * @throws {error}
   */
  constructor (
    date: Date,
    amount: number,
    id: string
  ) {
    this.validateAmount(amount)
    this.validateIdLength(id)

    this.date = date
    this.amount = amount
    this.id = id
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
   * Validates that the entered string is not empty
   *
   * @param id The id to validate
   * @throws {Error} - Id can not be an empty string.
   */
  private validateIdLength(id: string) {
    if(id.length < 1) {
      throw new Error("ID can not be an empty string.")
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
   * Returns a string representing the id of the transaction. 
   *
   * @returns An identifier for the transaction
   */
  public getId() {
    return this.id
  }

  /**
   * Returns the category of the transaction.
   * @returns { ExpenseCategory | IncomeCategory } - The category of the transaction.
   */
  public abstract getCategory(): ExpenseCategory | IncomeCategory
}