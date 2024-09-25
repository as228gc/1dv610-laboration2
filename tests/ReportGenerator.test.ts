import { ReportGenerator } from "../src/modules/ReportGenerator/ReportGenerator"
import { TransactionProcessor } from "../src/modules/TransactionProcessor/TransactionProcessor"
import { TransactionType } from "../src/enums/TransactionType"
import { Transaction } from "../src/modules/Transaction/Transaction"
import { ExpenseCategory } from "../src/enums/ExpenseCategory"
import { IncomeCategory } from "../src/enums/IncomeCategory"

describe('ReportGenerator class test', () => {

  // Create transacitons array for expenses and income, to test Map.
  const transactions: Array<Transaction> = []

  // Create expense transactions
  for (let i = 0; i < 5; i++) {
    transactions.push(
      new Transaction(
        new Date('2024-09-23'),
        100,
        TransactionType.EXPENSE,
        ExpenseCategory.FOOD
      )
    )
  }

  // Create income transactions
  for (let i = 0; i < 5; i++) {
    transactions.push(
      new Transaction(
        new Date('2024-09-25'),
        100,
        TransactionType.INCOME,
        IncomeCategory.SALARY
      )
    )
  }

  it('should create a ReportGenerator instance with valid constructor', () => {
    const processor = new TransactionProcessor(transactions)
    const generator = new ReportGenerator(processor)
    expect(generator).toBeDefined()
  })

  it('returns the total amount of income', () => {
    const processor = new TransactionProcessor(transactions)
    const generator = new ReportGenerator(processor)
    expect(generator.calculateIncome()).toEqual(500)
  })

  
  it('returns the total amount of expenses', () => {
    const processor = new TransactionProcessor(transactions)
    const generator = new ReportGenerator(processor)
    expect(generator.calculateExpenses()).toEqual(500)
  })
  
  it('should generate the net balance of the transactions', () => {
    const processor = new TransactionProcessor(transactions)
    const generator = new ReportGenerator(processor)
    expect(generator.calculateNetBalance()).toEqual(0)
  })

  it('should generate a report covering all transactions', () => {
    const processor = new TransactionProcessor(transactions)
    const generator = new ReportGenerator(processor)
    console.log(generator.generateSummaryReport().toString())
    expect(generator.generateSummaryReport().toString)
  })
})