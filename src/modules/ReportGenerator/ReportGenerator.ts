/**
 * @author Alex Söderberg <as228gc@student.lnu.se>
 * @module ReportGenerator
 * @version 0.1
 */

import { TransactionProcessor } from "../TransactionProcessor/TransactionProcessor";
import { IncomeCategory } from "../../enums/IncomeCategory";
import { ExpenseCategory } from "../../enums/ExpenseCategory";
import { Report } from "../Report/Report";
import { IncomeTransaction } from "../Transaction/IncomeTransaction";
import { ExpenseTransaction } from "../Transaction/ExpenseTransaction";

/**
 * Represents a report generator.
 */
export class ReportGenerator {
  #processor: TransactionProcessor

  /**
   * Creates a ReportGenerator instance.
   *
   * @param { TransactionProcessor } processor - A transaction processor for handling transaction to be included in the report.
   */
  constructor(processor: TransactionProcessor) {
    this.#processor = processor
  }

  /**
   * Returns the total amount of income from the collections of transactions.
   *
   * @returns { number } - The total income from the array of transactions.
   */
  calculateIncome(startDate: Date, endDate: Date): number {
    let total: number = 0

    const transactionsInTimeSpan = this.#processor.filterByTimeSpan(startDate, endDate)

    // For every transaction of the type INCOME
    for (const transaction of this.#processor.filterByType(IncomeTransaction)) {
      if (transaction instanceof IncomeTransaction
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
  calculateExpenses(startDate: Date, endDate: Date): number {
    let total: number = 0

    const transactionsInTimeSpan = this.#processor.filterByTimeSpan(startDate, endDate)

    // For every transaction of the type EXPENSE.
    for (const transaction of this.#processor.filterByType(ExpenseTransaction)) {
      // If the transaction matches the given time span.
      if (transaction instanceof ExpenseTransaction
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
  calculateNetBalance(startDate: Date, endDate: Date): number {
    return this.calculateIncome(startDate, endDate) - this.calculateExpenses(startDate, endDate) 
  }

  /**
   * Generates a report that covers all transactions.
   *
   * @returns { Report } A report containing a summary of all transactions.
   */
  generateReport(): Report {
    // Get the transactions with the earliest and latest date
    const firstDate: Date = this.#processor.sortByDate()[0].getDate()

    const lastDate: Date = this.#processor
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
    const expensesMap: Map<ExpenseCategory, number> = new Map<ExpenseCategory, number>()
    const incomeMap: Map<IncomeCategory, number> = new Map<IncomeCategory, number>()
    const transactions = this.#processor.getTransactions()

    for (const transaction of transactions) {
      const category = transaction.getCategory()
      const amount = transaction.getAmount()

      if (transaction instanceof ExpenseTransaction) {
        this.addAmountToCategory(expensesMap, amount, category)
      } else if (transaction instanceof IncomeTransaction) {
        this.addAmountToCategory(incomeMap, amount, category)
      }
    }

    const summary = {
      "incomeByCategory": incomeMap,
      "expensesByCategory": expensesMap
    }

    return summary
  }

  private addAmountToCategory(
    map: Map<IncomeCategory | ExpenseCategory, number>,
    amount: number,
    category: IncomeCategory | ExpenseCategory) {
      if (map.has(category)) {
        const currentValue = this.findCategoryCurrentValue(map, category)
        map
          .set(
            category,
            currentValue + amount
          )
      } else {
        map
          .set(
            category,
            amount
          )
      }
  }

  /**
   * Returns a number which represents the current value for the given category.
   *
   * @param map A map of categories and values
   * @param category The category to find the value for
   * @returns A number representing the current value of the category.
   */
  private findCategoryCurrentValue (map: Map<IncomeCategory | ExpenseCategory, number>, category: IncomeCategory | ExpenseCategory): number  {
    let currentValue: number
    try {
      if (this.isUndefined(map.get(category))){
        throw new Error('Value of category not found.')
      }
      currentValue = map.get(category) as number
    } catch (error) {
      currentValue = 0
    }
    return currentValue
  }

  private isUndefined (value: any) {
    return value === undefined
  }
}