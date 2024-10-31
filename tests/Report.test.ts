import { ExpenseCategory } from "../src/enums/ExpenseCategory";
import { IncomeCategory } from "../src/enums/IncomeCategory";
import { Transaction } from "../src/modules/Transaction/Transaction";
import { ReportGenerator } from "../src/modules/ReportGenerator/ReportGenerator";
import { TransactionProcessor } from "../src/modules/TransactionProcessor/TransactionProcessor";
import { ExpenseTransaction } from "../src/modules/Transaction/ExpenseTransaction";
import { IncomeTransaction } from "../src/modules/Transaction/IncomeTransaction";
import { mock } from "./TransactionArrayMock";

describe('Report class tests', () => {

  // Create transacitons array for expenses and income, to test Map.
  // const transactions: Array<Transaction> = []

  // // Create expense transactions
  // for (let i = 0; i < 5; i++) {
  //   transactions.push(
  //     new ExpenseTransaction(
  //       new Date('2024-09-30'),
  //       100,
  //       ExpenseCategory.FOOD
  //     )
  //   )
  // }

  // // Create income transactions
  // for (let i = 0; i < 5; i++) {
  //   transactions.push(
  //     new IncomeTransaction(
  //       new Date('2024-09-30'),
  //       100,
  //       IncomeCategory.SALARY
  //     )
  //   )
  // }

  // for (let i = 0; i < 5; i++) {
  //   transactions.push(
  //     new IncomeTransaction(
  //       new Date('2024-09-30'),
  //       200,
  //       IncomeCategory.GIFT
  //     )
  //   )
  // }

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
})