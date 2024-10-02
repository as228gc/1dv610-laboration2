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

  /**
   * Creates a ReportGenerator instance.
   *
   * @param { TransactionProcessor } processor - A transaction processor for handling transaction to be included in the report.
   */
  constructor(processor: TransactionProcessor) {
    this.#processor = processor
  }

  /**
   * Returns the total amount of income from the collections of transactions.
   *
   * @returns { number } - The total income from the array of transactions.
   */
  calculateIncome(startDate: Date, endDate: Date): number {
    let total: number = 0

    const transactionsInTimeSpan = this.#processor.filterByTimeSpan(startDate, endDate)

    // For every transaction of the type INCOME
    for (const transaction of this.#processor.filterByType(TransactionType.INCOME)) {
      if (transaction.getType() === TransactionType.INCOME
        && transactionsInTimeSpan.includes(transaction)) {
        total += transaction.getAmount()
      }
    }
    return total
  }

  /**
   * Returns the total amount of expenses from the collection of transactions.
   *
   * @returns {number} - The total expenses from the array of transactions.
   */
  calculateExpenses(startDate: Date, endDate: Date): number {
    let total: number = 0

    const transactionsInTimeSpan = this.#processor.filterByTimeSpan(startDate, endDate)

    // For every transaction of the type EXPENSE.
    for (const transaction of this.#processor.filterByType(TransactionType.EXPENSE)) {
      // If the transaction matches the given time span.
      if (transaction.getType() === TransactionType.EXPENSE 
        && transactionsInTimeSpan.includes(transaction)) {

        total += transaction.getAmount()

      }
    }
    return total
  }


  /**
   * Returns the net balance of the transactions. (Income - (minus) Expenses)
   *
   * @returns { number } The net balance.
   */
  calculateNetBalance(startDate: Date, endDate: Date): number {
    return this.calculateIncome(startDate, endDate) - this.calculateExpenses(startDate, endDate) 
  }

  /**
   * Generates a report that covers all transactions.
   *
   * @returns { Report } A report containing a summary of all transactions.
   */
  generateReport(): Report {
    // Get the transactions with the earliest and latest date
    const firstDate: Date = this.#processor.sortByDate()[0].getDate()

    const lastDate: Date = this.#processor
      .sortByDate()[this.#processor.getTransactions().length - 1]
      .getDate()

    const report: Report = new Report(
      this.calculateIncome(firstDate, lastDate),
      this.calculateExpenses(firstDate, lastDate),
      this.calculateNetBalance(firstDate, lastDate),
      firstDate,
      lastDate,
      this.summarizeCategories().incomeByCategory,
      this.summarizeCategories().expensesByCategory
    )

    return report
  }

  /**
   * Returns an object containing the total amount of expenses and income for each category.
   *
   * @returns { any } An object containing the maps of income and expenses by category.
   */
  private summarizeCategories(): any  {
    const expensesMap: Map<ExpenseCategory, number> = new Map<ExpenseCategory, number>()
    const incomeMap: Map<IncomeCategory, number> = new Map<IncomeCategory, number>()
  
    // Store transactions in variable for reducing amount of code
    const transactions = this.#processor.getTransactions()

    for (const transaction of transactions) {
      // Check if the transaction is of the type EXPENSE
      if (transaction.getType() === TransactionType.EXPENSE) {
  
        // If the key, value pair already exists in the Map,
        // add the value of the transaciton to correct key value pair
        if (expensesMap.has(transaction.getCategory() as ExpenseCategory)) {
  
          // Check if the value is currently undefined, if so, set the value to 0
          const currentValue = expensesMap.get(transaction.getCategory() as ExpenseCategory) || 0
          expensesMap
            .set(
              transaction.getCategory() as ExpenseCategory,
  
              // Add the value of the transaction to the category.
              currentValue + transaction.getAmount()
            )
        } else {
          expensesMap
            .set(
              transaction.getCategory() as ExpenseCategory,
              transaction.getAmount()
            )
        }
      } else if (transaction.getType() === TransactionType.INCOME) {
        if (incomeMap.has(transaction.getCategory() as IncomeCategory)) {
  
          // Check if the value is currently undefined, if so, set the value to 0
          const currentValue = incomeMap.get(transaction.getCategory() as IncomeCategory) || 0
          incomeMap
            .set(
              transaction.getCategory() as IncomeCategory,
              
              // Add the value of the transaction to the category.
              currentValue + transaction.getAmount()
            )
        } else {
          incomeMap
            .set(
              transaction.getCategory() as IncomeCategory,
              transaction.getAmount()
            )
        }
      }
    }

    const summary = {
      "incomeByCategory": incomeMap,
      "expensesByCategory": expensesMap
    }

    return summary
  }
}