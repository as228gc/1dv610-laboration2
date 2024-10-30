import { ExpenseCategory } from "../../enums/ExpenseCategory"
import { IncomeCategory } from "../../enums/IncomeCategory"
import { ExpenseTransaction } from "../Transaction/ExpenseTransaction"
import { IncomeTransaction } from "../Transaction/IncomeTransaction"
import { Transaction } from "../Transaction/Transaction"
import { SummaryDTO } from "./SummaryDTO"

export class CategorySummarizer {
  private transactions: Array<Transaction>

  constructor(transactions: Array<Transaction>) {
    this.transactions = transactions
  }

  /**
   * Returns an object containing the total amount of expenses and income for each category.
   *
   * @returns { SummaryDTO } An object containing the maps of income and expenses by category.
   */
  public summarizeCategories(): SummaryDTO  {
    const expensesMap: Map<ExpenseCategory, number> = new Map<ExpenseCategory, number>()
    const incomeMap: Map<IncomeCategory, number> = new Map<IncomeCategory, number>()

    for (const transaction of this.transactions) {
      const category = transaction.getCategory()
      const amount = transaction.getAmount()

      if (transaction instanceof ExpenseTransaction) {
        this.addAmountToCategory(expensesMap, amount, category)
      } else if (transaction instanceof IncomeTransaction) {
        this.addAmountToCategory(incomeMap, amount, category)
      }
    }

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