import { CategorySummarizer } from "../src/modules/CategorySummarizer/CategorySummarizer"
import { mock } from "./TransactionArrayMock"
import { SummaryDTO } from "../src/lib/SummaryDTO"
import { ExpenseCategory, IncomeCategory, Transaction } from "../src"

describe('CategorySummarizer class test', () => {
  it('should return a SummaryDTO with the categorized transactions', () => {
    const summarizer = new CategorySummarizer()
    const summary = summarizer.summarizeCategories(mock.transactions)
    const incomeByCategory = new Map<IncomeCategory, number>([
      [IncomeCategory.SALARY, 500],
      [IncomeCategory.GIFT, 500]
    ])
    const expenseByCategory = new Map<ExpenseCategory, number>([
      [ExpenseCategory.FOOD, 500],
      [ExpenseCategory.TRANSPORT, 500]
    ])


    const summaryComparable: SummaryDTO = {
      expenseByCategory,
      incomeByCategory 
    }

    expect(summary).toEqual(summaryComparable)
  })

  it('should throw an error if category is undefined', () => {
    const transactions: Array<Transaction> = []
    const summarizer = new CategorySummarizer()
    expect(() => summarizer.summarizeCategories(transactions)).toThrow()
  })
})