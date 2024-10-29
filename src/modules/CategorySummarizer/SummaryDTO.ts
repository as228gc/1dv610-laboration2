import { ExpenseCategory } from "../../enums/ExpenseCategory";
import { IncomeCategory } from "../../enums/IncomeCategory";

export interface SummaryDTO {
  expenseByCategory: Map<ExpenseCategory, number>,
  incomeByCategory: Map<IncomeCategory, number>
}