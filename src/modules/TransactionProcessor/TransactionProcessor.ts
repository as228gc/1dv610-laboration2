/**
 * @author Alex Söderberg <as228gc@student.lnu.se>
 * @module TransactionProcessor
 * @version 0.1
 */

import { ExpenseCategory } from "../../enums/ExpenseCategory";
import { IncomeCategory } from "../../enums/IncomeCategory";
import { TransactionType } from "../../enums/TransactionType";
import { Transaction } from "../Transaction/Transaction";

export class TransactionProcessor {
  #transactions: Array<Transaction>

  constructor(transactions: Array<Transaction>) {
    this.#transactions = transactions
  }

  /**
   * Adds a transaction to the array of transactions.
   *
   * @param { Transaction } transaction - The transaction to be added to the array.
   */
  addTransaction(transaction: Transaction): void {
    this.#transactions.push(transaction)
  }

  /**
   * Returns a copy of the array of transactions.
   *
   * @returns {Array<Transaction>} A copy of the array of transactions.
   */
  getTransactions(): Array<Transaction> {
    return [...this.#transactions]
  }

  /**
   * Returns an array filtered by the chosen category.
   *
   * @param { ExpenseCategory | IncomeCategory } category - The category to be selected out of the transactions.
   * @returns { Array<Transaction> } - The filtered array of transactions.
   */
  filterTransactionsByCategory(category: ExpenseCategory | IncomeCategory): Array<Transaction> {
    const filtered: Array<Transaction> = []
    for (const transaction of this.#transactions) {
      if (transaction.getCategory() === category) {
        filtered.push(transaction)
      }
    }
    return filtered
  }

  /**
   * Returns an array giltered by the chosen transaction type.
   *
   * @param { TransactionType } type - The transaction type to be selected out of the transactions.
   * @returns { Array<Transaction> } - The filtered array of transactions.
   */
  filterTransactionsByType(type: TransactionType): Array<Transaction> {
    const filtered: Array<Transaction> = []
    for (const transaction of this.#transactions) {
      if (transaction.getType() === type) {
        filtered.push(transaction)
      }
    }
    return filtered
  }
}