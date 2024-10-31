import { ReportGenerator } from "../src/modules/ReportGenerator/ReportGenerator"
import { TransactionProcessor } from "../src/modules/TransactionProcessor/TransactionProcessor"
import { mock } from "./TransactionArrayMock"

describe('ReportGenerator class test', () => {
  const processor = new TransactionProcessor(mock.transactions)

  it('should create a ReportGenerator instance with valid constructor', () => {
    const generator = new ReportGenerator(processor)
    expect(generator).toBeDefined()
  })

  it('should generate a report covering all transactions', () => {
    const generator = new ReportGenerator(processor)
    const report = generator.generateReport()
    expect(report.toJSON()).toEqual(
      {
        totalIncome: mock.totalIncome,
        totalExpenses: mock.totalExpenses,
        netBalance: mock.netBalance,
        startDate: mock.startDate,
        endDate: mock.endDate,
        expenseByCategory: [
            { category: 'food', totalAmount: 500 },
            { category: 'transport', totalAmount: 500 }
          ],
        incomeByCategory: [
            { category: 'salary', totalAmount: 500 },
            { category: 'gift', totalAmount: 500 }
          ]
      }
    )
  })

  it('should generate a report covering transactions made in a specific time span', () => {
    const generator = new ReportGenerator(processor)
    const startDate = new Date('2024-09-24')
    const endDate = new Date('2024-09-25')
    const report = generator.generateReportByTimeSpan(startDate, endDate)
    expect(report.toJSON()).toEqual(
      {
        totalIncome: 500,
        totalExpenses: 500,
        netBalance: 0,
        startDate: startDate,
        endDate: endDate,
        expenseByCategory: [ { category: 'transport', totalAmount: 500 } ],
        incomeByCategory: [ { category: 'salary', totalAmount: 500 } ]
      }
    )
  })
})