import { ExpenseCategory } from "../../enums/ExpenseCategory";
import { IncomeCategory } from "../../enums/IncomeCategory";

export type SummaryDTO = {
  expenseByCategory: Map<ExpenseCategory, number>,
  incomeByCategory: Map<IncomeCategory, number>
}