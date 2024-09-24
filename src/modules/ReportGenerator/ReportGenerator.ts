/**
 * @author Alex Söderberg <as228gc@student.lnu.se>
 * @module ReportGenerator
 * @version 0.1
 */

import { TransactionProcessor } from "../TransactionProcessor/TransactionProcessor";
import { TransactionType } from "../../enums/TransactionType";

/**
 * Represents a report generator.
 */
export class ReportGenerator {
  #processor: TransactionProcessor

  constructor(processor: TransactionProcessor) {
    this.#processor = processor
  }

  /**
   * Returns the total amount of expenses from the collection of transactions.
   *
   * @returns {number} - The total expenses from the array of transactions.
   */
  calculateExpenses(): number {
    let total: number = 0
    for (const transaction of this.#processor.getTransactionsByType(TransactionType.EXPENSE)) {
      if (transaction.getType() === TransactionType.EXPENSE) {
        total += transaction.getAmount()
      }
    }
    return total
  }

  /**
   * Returns the total amount of income from the collections of transactions.
   *
   * @returns { number } - The total income from the array of transactions.
   */
  calculateIncome(): number {
    let total: number = 0
    for (const transaction of this.#processor.getTransactionsByType(TransactionType.INCOME)) {
      if (transaction.getType() === TransactionType.INCOME) {
        total += transaction.getAmount()
      }
    }
    return total
  }

  calculateNetBalance() {
    return this.calculateIncome() - this.calculateExpenses() 
  }

  generateSummaryReport() {

  }

  generateCategoryReport() {

  }

  generateMonthlyReport() {

  }
}