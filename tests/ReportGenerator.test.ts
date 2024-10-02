import { ReportGenerator } from "../src/modules/ReportGenerator/ReportGenerator"
import { TransactionProcessor } from "../src/modules/TransactionProcessor/TransactionProcessor"
import { TransactionType } from "../src/enums/TransactionType"
import { Transaction } from "../src/modules/Transaction/Transaction"
import { ExpenseCategory } from "../src/enums/ExpenseCategory"
import { IncomeCategory } from "../src/enums/IncomeCategory"

describe('ReportGenerator class test', () => {

  // Create transacitons array for expenses and income, to test Map.
  const transactions: Array<Transaction> = []
  let testValue = 100
  let totalExpenses = 0
  let totalIncome = 0

  // Create expense transactions
  for (let i = 0; i < 5; i++) {
    transactions.push(
      new Transaction(
        new Date('2024-09-23'),
        testValue,
        TransactionType.EXPENSE,
        ExpenseCategory.FOOD
      )
    )
    totalExpenses += testValue
  }

  // Create income transactions
  for (let i = 0; i < 5; i++) {
    transactions.push(
      new Transaction(
        new Date('2024-09-25'),
        testValue,
        TransactionType.INCOME,
        IncomeCategory.SALARY
      )
    )
    totalIncome += testValue
  }

  for (let i = 0; i < 5; i++) {
    transactions.push(
      new Transaction(
        new Date('2024-09-24'),
        testValue,
        TransactionType.EXPENSE,
        ExpenseCategory.FOOD
      )
    )
    totalExpenses += testValue
  }


  const processor = new TransactionProcessor(transactions)
  const sorted = processor.sortByDate()
  const startDate = sorted[0].getDate()
  const endDate = sorted[sorted.length - 1].getDate()

  it('should create a ReportGenerator instance with valid constructor', () => {
    const generator = new ReportGenerator(processor)
    expect(generator).toBeDefined()
  })

  it('returns the total amount of income', () => {
    const generator = new ReportGenerator(processor)
    expect(generator.calculateIncome(startDate, endDate)).toEqual(totalIncome)
  })

  
  it('returns the total amount of expenses', () => {
    const generator = new ReportGenerator(processor)
    expect(generator.calculateExpenses(startDate, endDate)).toEqual(totalExpenses)
  })
  
  it('should generate the net balance of the transactions', () => {
    const generator = new ReportGenerator(processor)
    expect(generator.calculateNetBalance(startDate, endDate)).toEqual(totalIncome - totalExpenses)
  })

  it('should generate a report covering all transactions', () => {
    const generator = new ReportGenerator(processor)
    const report = generator.generateReport()
    expect(report.toJSON()).toEqual(
      {
        totalIncome: testValue * 5,
        totalExpenses: testValue * 10,
        netBalance: testValue * -5,
        startDate: new Date('2024-09-23T00:00:00.000Z'),
        endDate: new Date('2024-09-25T00:00:00.000Z'),
        expenseByCategory: [ { Category: 'food', TotalAmount: 1000 } ],
        incomeByCategory: [ { Category: 'salary', TotalAmount: 500 } ]
      }
    )
  })

  it('should calculate total expenses of transactions in a given time span', () => {
    const processor = new TransactionProcessor(transactions)
    const generator = new ReportGenerator(processor)
    expect(generator.calculateExpenses(new Date('2024-09-24'), new Date('2024-09-24'))).toEqual(500)
  })
})