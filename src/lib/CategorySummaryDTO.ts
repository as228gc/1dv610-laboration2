import { ExpenseCategory } from "../enums/ExpenseCategory"
import { IncomeCategory } from "../enums/IncomeCategory"

export type CategorySummaryDTO = {
  category: IncomeCategory | ExpenseCategory,
  totalAmount: number
}