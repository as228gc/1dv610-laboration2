/**
 * @author Alex Söderberg <as228gc@student.lnu.se>
 * @module Report
 * @version 0.1
 */

import { ExpenseCategory } from "../../enums/ExpenseCategory"
import { IncomeCategory } from "../../enums/IncomeCategory"
import { CategorySummaryDTO } from "../../lib/CategorySummaryDTO"
import { SummaryDTO } from "../../lib/SummaryDTO"

/**
 * Represents a financial report.
 */
export class Report {
  #totalIncome: number = 0
  #totalExpenses: number = 0
  #netBalance: number = 0
  #startDate: Date
  #endDate: Date
  #incomeByCategory: Map<IncomeCategory, number>
  #expenseByCategory: Map<ExpenseCategory, number>

  /**
   * Creates an instance of the Report class.
   * 
   * @param { number } totalIncome - The total amount from the Transaction Type INCOME.
   * @param { number } totalExpenses - The total amount from the Transaction Type EXPENSE.
   * @param { number } netBalance - The calculated net balance.
   * @param { Date } startDate - The date of the first transaction.
   * @param { Date } endDate - The date of the last transaction.
   * @param { SummaryDTO } summary - A DTO containing maps of expenses and income by category.
   */
  constructor(
    totalIncome: number,
    totalExpenses: number,
    netBalance: number,
    startDate: Date,
    endDate: Date,
    summary: SummaryDTO
  ) {
    this.#totalIncome = totalIncome
    this.#totalExpenses = totalExpenses
    this.#netBalance = netBalance
    this.#startDate = startDate
    this.#endDate = endDate
    this.#incomeByCategory = summary.incomeByCategory
    this.#expenseByCategory = summary.expenseByCategory
  }

  /**
   * Returns an array of objects containing the same information as the map.
   * Making the object's keys and values readable when accessing the object.
   *
   * @returns { Array<CategorySummaryDTO> } An array of DTO's containing category and total amount.
   */
  private formatExpensesByCategory(): Array<CategorySummaryDTO> {
    const expensesCategories = Array<CategorySummaryDTO>()
    this.#expenseByCategory.forEach((value: number, key: ExpenseCategory) => {
      const summary: CategorySummaryDTO = {
        category: key,
        totalAmount: value
      }
      expensesCategories.push(summary)
    })

    return expensesCategories
  }

  /**
   * Returns an array of objects containing the same information as the map.
   * Making the object's keys and values readable when accessing the object.
   *
   * @returns { Array<CategorySummaryDTO> } An array of DTO's containing category and total amount.
   */
  private formatIncomeByCategory(): Array<CategorySummaryDTO> {
    const incomeByCategories = Array<CategorySummaryDTO>()
    this.#incomeByCategory.forEach((value: number, key: IncomeCategory) => {
      const summary: CategorySummaryDTO = {
        category: key,
        totalAmount: value
      }
      incomeByCategories.push(summary)
    })

    return incomeByCategories
  }

  getTotalIncome(): number {
    return this.#totalIncome
  }

  getTotalExpenses(): number {
    return this.#totalExpenses
  }

  getNetBalance(): number {
    return this.#netBalance
  }

  getStartDate(): Date {
    return this.#startDate
  }

  getEndDate(): Date {
    return this.#endDate
  }

  getExpensesByCategory(): Array<CategorySummaryDTO> {
    return this.formatExpensesByCategory()
  }

  getIncomeByCategory(): Array<CategorySummaryDTO> {
    return this.formatIncomeByCategory()
  }

  /**
   * Returns a string representation of the instance.
   *
   * @returns { String } A string represantation of the instance.
   */
  toString(): String {
    let summary: String = `
    Total income: ${this.#totalIncome}\n
    Total expenses: ${this.#totalExpenses}\n
    Net balance: ${this.#netBalance}\n
    Start date: ${this.#startDate.toDateString()}\n
    End date: ${this.#endDate.toDateString()}\n
    Expense by category:\n`

    for (const expense of this.formatExpensesByCategory()) {
      summary += `      ${expense.category}: ${expense.totalAmount}\n`
    }

    summary += `    Income by category:\n`

    for (const income of this.formatIncomeByCategory()) {
      summary += `      ${income.category}: ${income.totalAmount}\n`
    }

    return summary
  }

  toJSON(): Object {
    return {
      "totalIncome": this.#totalIncome,
      "totalExpenses": this.#totalExpenses,
      "netBalance": this.#netBalance,
      "startDate": this.#startDate,
      "endDate": this.#endDate,
      "expenseByCategory": this.formatExpensesByCategory(),
      "incomeByCategory": this.formatIncomeByCategory()
    }
  }
}