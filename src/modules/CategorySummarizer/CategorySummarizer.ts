import { ExpenseCategory } from "../../enums/ExpenseCategory"
import { IncomeCategory } from "../../enums/IncomeCategory"
import { ExpenseTransaction } from "../Transaction/ExpenseTransaction"
import { IncomeTransaction } from "../Transaction/IncomeTransaction"
import { Transaction } from "../Transaction/Transaction"
import { SummaryDTO } from "../../lib/SummaryDTO"

export class CategorySummarizer {
  /**
   * Returns an object containing the total amount of expenses and income for each category.
   *
   * @throws {Error} If the argument is invalid.
   * @returns { SummaryDTO } An object containing the maps of income and expenses by category.
   */
  public summarizeCategories(transactions: Array<Transaction>): SummaryDTO {
    if (transactions.length == 0) {
      throw new Error('Illegal Argument: The array is empty')
    }
    const expensesMap: Map<ExpenseCategory, number> = new Map<ExpenseCategory, number>()
    const incomeMap: Map<IncomeCategory, number> = new Map<IncomeCategory, number>()

    for (const transaction of transactions) {
      const category = transaction.getCategory()
      const amount = transaction.getAmount()

      if (transaction instanceof ExpenseTransaction) {
        this.addAmountToCategory(expensesMap, amount, category)
      } else if (transaction instanceof IncomeTransaction) {
        this.addAmountToCategory(incomeMap, amount, category)
      }
    }

    return this.createSummary(expensesMap, incomeMap)
  }

  private createSummary(
    expensesMap: Map<ExpenseCategory, number>,
    incomeMap: Map<IncomeCategory, number>
    ): SummaryDTO {
      const summary: SummaryDTO = {
        expenseByCategory: expensesMap,
        incomeByCategory: incomeMap
      }
      return summary
    }

  private addAmountToCategory(
    map: Map<IncomeCategory | ExpenseCategory, number>,
    amount: number,
    category: IncomeCategory | ExpenseCategory) {
    if (map.has(category)) {
      const currentValue = this.findCategoryCurrentValue(map, category)
      map.set(category, currentValue + amount)
    } else {
      map.set(category, amount)
    }
  }

  /**
   * Returns a number which represents the current value for the given category.
   *
   * @param map A map of categories and values
   * @param category The category to find the value for
   * @returns A number representing the current value of the category.
   */
  private findCategoryCurrentValue(map: Map<IncomeCategory | ExpenseCategory, number>, category: IncomeCategory | ExpenseCategory): number {
    let currentValue: number
    currentValue = map.get(category) as number
    
    return currentValue
  }
}