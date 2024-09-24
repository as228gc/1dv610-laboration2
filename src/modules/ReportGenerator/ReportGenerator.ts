/**
 * @author Alex Söderberg <as228gc@student.lnu.se>
 * @module ReportGenerator
 * @version 0.1
 */

import { TransactionProcessor } from "../TransactionProcessor/TransactionProcessor";
import { TransactionType } from "../../enums/TransactionType";
import { IncomeCategory } from "../../enums/IncomeCategory";
import { ExpenseCategory } from "../../enums/ExpenseCategory";
import { Report } from "../Report/Report";

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

    // For every transaction of the type EXPENSE
    for (const transaction of this.#processor.filterByType(TransactionType.EXPENSE)) {
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

    // For every transaction of the type INCOME
    for (const transaction of this.#processor.filterByType(TransactionType.INCOME)) {
      if (transaction.getType() === TransactionType.INCOME) {
        total += transaction.getAmount()
      }
    }
    return total
  }

  /**
   * Returns the net balance of the transactions.
   *
   * @returns { number } The net balance.
   */
  calculateNetBalance(): number {
    return this.calculateIncome() - this.calculateExpenses() 
  }

  // generateSummaryReport(): Report {
  //   const report: Report = new Report(
  //     this.calculateIncome(),
  //     this.calculateExpenses(),
  //     this.calculateNetBalance(),
  //   )
  // }

  // generateCategoryReport(category: IncomeCategory | ExpenseCategory): Report {

  // }

  /**
   * Returns a report of the transactions of the chosen type.
   *
   * @param {TransactionType} type - Which type of transaction the report should cover.
   * @returns {Report} - A report of the transactions of the chosen type.
   */
  // generateTypeReport(type: TransactionType): Report {

  // }

  // generateMonthlyReport() {

  // }
}