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

  /**
   * Creates an instance of the Report class.
   * 
   * @param { number } totalIncome - The total amount from the Transaction Type INCOME.
   * @param { number } totalExpenses - The total amount from the Transaction Type EXPENSE.
   * @param { number } netBalance - The calculated net balance.
   * @param { Date } startDate - The date of the first transaction.
   * @param { Date } endDate - The date of the last transaction.
   * @param { Map<IncomeCategory, number> } incomeByCategory - The total income for each income category.
   * @param { Map<ExpenseCategory, number> } expenseByCategory - The total expenses for each expense category.
   */
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

  getExpensesByCategory(): Object {
    type Summary = {
      Category: ExpenseCategory,
      TotalAmount: number
    }

    const expenses = <Summary>{}

    this.#expenseByCategory.forEach((value: number, key: ExpenseCategory) => {
      expenses.Category = key
      expenses.TotalAmount = value
    })

    return expenses
  }

  getIncomeByCategory(): void {
    type Summary = {
      Category: IncomeCategory,
      TotalAmount: number
    }

    const income = <Summary>{}
    this.#incomeByCategory.forEach((value: number, key: IncomeCategory) => {
      income.Category = key
      income.TotalAmount = value
    })
  }

  /**
   * Returns a string representation of the instance.
   *
   * @returns {String} A string represantation of the instance.
   */
  toString(): String {
    let summary:String = ''
    return summary
  }
}