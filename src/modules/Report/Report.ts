/**
 * @author Alex Söderberg <as228gc@student.lnu.se>
 * @module Report
 * @version 0.1
 */

import { ExpenseCategory } from "../../enums/ExpenseCategory"
import { IncomeCategory } from "../../enums/IncomeCategory"

/**
 * Represents a financial report.
 */
export class Report {
  #totalIncome: number
  #totalExpenses: number
  #netBalance :number
  #startDate: Date
  #endDate: Date
  #incomeByCategory: Map<IncomeCategory, number>
  #expenseByCategory: Map<ExpenseCategory, number>

  constructor(
    totalIncome: number,
    totalExpenses: number,
    netBalance: number,
    startDate: Date,
    endDate: Date,
    incomeByCategory: Map<IncomeCategory, number>,
    expenseByCategory: Map<ExpenseCategory, number>
  ) {
    this.#totalIncome = totalIncome
    this.#totalExpenses = totalExpenses
    this.#netBalance = netBalance
    this.#startDate = startDate
    this.#endDate = endDate
    this.#incomeByCategory = incomeByCategory
    this.#expenseByCategory = expenseByCategory
  }

  toString(): String {
    return 'Report toString() method'
  }
}