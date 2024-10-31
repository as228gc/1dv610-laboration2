import { ExpenseCategory, IncomeCategory } from "../src";
import { CategorySummaryDTO } from "../src/lib/CategorySummaryDTO";
import { ReportGenerator } from "../src/modules/ReportGenerator/ReportGenerator";
import { TransactionProcessor } from "../src/modules/TransactionProcessor/TransactionProcessor";
import { mock } from "./TransactionArrayMock";

describe('Report class tests', () => {

  const processor = new TransactionProcessor(mock.transactions)
  const generator = new ReportGenerator(processor)

  it('should create a report instance with a correctly entered constructor', () => {
    const report = generator.generateReport()
    expect(report).toBeDefined()
  })

  it('should return a JSON representation of the instance', () => {
    const report = generator.generateReport()
    expect(report.toJSON()).toEqual(
      {
        totalIncome: mock.totalIncome,
        totalExpenses: mock.totalExpenses,
        netBalance: mock.netBalance,
        startDate: mock.startDate,
        endDate: mock.endDate,
        expenseByCategory: [ { category: 'food', totalAmount: 500 }, {category: 'transport', totalAmount: 500}],
        incomeByCategory: [ { category: 'salary', totalAmount: 500 }, { category: 'gift', totalAmount: 500 } ]
      }
    )
  })

  it('should return a string representation of the instance', () => {
    const report = generator.generateReport()
    expect(report.toString()).toEqual(
      `
    Total income: ${mock.totalIncome}

    Total expenses: ${mock.totalExpenses}

    Net balance: ${mock.netBalance}

    Start date: ${mock.startDate.toDateString()}

    End date: ${mock.endDate.toDateString()}

    Expense by category:
      food: 500
      transport: 500
    Income by category:
      salary: 500
      gift: 500\n`)
  })

  it('should return the start date', () => {
    const report = generator.generateReport()
    expect(report.getStartDate()).toEqual(mock.startDate)
  })

  it('should return the total income', () => {
    const report = generator.generateReport()
    expect(report.getTotalIncome()).toEqual(mock.totalIncome)
  })

  it('should return the total expenses', () => {
    const report = generator.generateReport()
    expect(report.getTotalExpenses()).toEqual(mock.totalExpenses)
  })

  it('should return the net balance', () => {
    const report = generator.generateReport()
    expect(report.getNetBalance()).toEqual(mock.netBalance)
  })

  it('should return the end date', () => {
    const report = generator.generateReport()
    expect(report.getEndDate()).toEqual(mock.endDate)
  })

  it('should return the start date', () => {
    const report = generator.generateReport()
    expect(report.getStartDate()).toEqual(mock.startDate)
  })

  it('should return the expenses by category', () => {
    const report = generator.generateReport()
    const dtoArray: Array<CategorySummaryDTO> = [
      {
        category: ExpenseCategory.FOOD,
        totalAmount: 500
      },
      {
        category: ExpenseCategory.TRANSPORT,
        totalAmount: 500
      }
    ]
    expect(report.getExpensesByCategory()).toEqual(dtoArray)
  })

  it('should return the income by category', () => {
    const report = generator.generateReport()
    const dtoArray: Array<CategorySummaryDTO> = [
      {
        category: IncomeCategory.SALARY,
        totalAmount: 500
      },
      {
        category: IncomeCategory.GIFT,
        totalAmount: 500
      }
    ]
    expect(report.getIncomeByCategory()).toEqual(dtoArray)
  })
})