import { ExpenseCategory } from "../src/enums/ExpenseCategory";
import { IncomeCategory } from "../src/enums/IncomeCategory";
import { TransactionType } from "../src/enums/TransactionType";
import { Report } from "../src/modules/Report/Report";
import { Transaction } from "../src/modules/Transaction/Transaction";
import { ReportGenerator } from "../src/modules/ReportGenerator/ReportGenerator";
import { TransactionProcessor } from "../src/modules/TransactionProcessor/TransactionProcessor";
import { ExpenseTransaction } from "../src/modules/Transaction/ExpenseTransaction";
import { IncomeTransaction } from "../src/modules/Transaction/IncomeTransaction";

describe('Report class tests', () => {

  // Create transacitons array for expenses and income, to test Map.
  const transactions: Array<Transaction> = []

  // Create expense transactions
  for (let i = 0; i < 5; i++) {
    transactions.push(
      new ExpenseTransaction(
        new Date('2024-09-30'),
        100,
        ExpenseCategory.FOOD
      )
    )
  }

  // Create income transactions
  for (let i = 0; i < 5; i++) {
    transactions.push(
      new IncomeTransaction(
        new Date('2024-09-30'),
        100,
        IncomeCategory.SALARY
      )
    )
  }

  for (let i = 0; i < 5; i++) {
    transactions.push(
      new IncomeTransaction(
        new Date('2024-09-30'),
        200,
        IncomeCategory.GIFT
      )
    )
  }

  const processor = new TransactionProcessor(transactions)
  const generator = new ReportGenerator(processor)

  it('should create a report instance with a correctly entered constructor', () => {
    const report = generator.generateReport()
    expect(report).toBeDefined()
  })

  it('should return a JSON representation of the instance', () => {
    const report = generator.generateReport()
    expect(report.toJSON()).toEqual(
      {
        totalIncome: 1500,
        totalExpenses: 500,
        netBalance: 1000,
        startDate: new Date('2024-09-30T00:00:00.000Z'),
        endDate: new Date('2024-09-30T00:00:00.000Z'),
        expenseByCategory: [ { Category: 'food', TotalAmount: 500 } ],
        incomeByCategory: [ { Category: 'salary', TotalAmount: 500 }, { Category: 'gift', TotalAmount: 1000 } ]
      }
    )
  })

  it('should return a string representation of the instance', () => {
    const report = generator.generateReport()
    expect(report.toString()).toEqual(
      `
    Total income: 1500

    Total expenses: 500

    Net balance: 1000

    Start date: Mon Sep 30 2024

    End date: Mon Sep 30 2024

    Expense by category:
      food: 500
    Income by category:
      salary: 500
      gift: 1000\n`)
  })
})