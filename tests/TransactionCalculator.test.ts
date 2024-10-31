import { TransactionProcessor } from "../src"
import { TransactionCalculator } from "../src/modules/TransactionCalculator/TransactionCalculator"
import { mock } from "./TransactionArrayMock"

describe('TransactionCalculator class test', () => {
  const processor = new TransactionProcessor(mock.transactions)
  const calculator = new TransactionCalculator(processor)

  it('should calculate the total income of all transactions', () => {
    const totalIncome = calculator.calculateTotalIncome()
    expect(totalIncome).toEqual(mock.totalIncome)
  })

  it('should calculate the total expenses of all transactions', () => {
    const totalExpenses = calculator.calculateTotalExpenses()
    expect(totalExpenses).toEqual(mock.totalExpenses)
  })

  it('should calculate the total net balance of all transactions', () => {
    const netBalance = calculator.calculateTotalNetBalance()
    expect(netBalance).toEqual(mock.totalIncome - mock.totalExpenses)
  })

  it('should calculate the total income in a specific time span', () => {
    const startDate = new Date('2024-09-25')
    const endDate = new Date('2024-09-25')
    const totalIncome = calculator.calculateIncomeInTimeSpan(startDate, endDate)
    expect(totalIncome).toEqual(500)
  })

  it('should calculate the total expenses in a specific time span', () => {
    const startDate = new Date('2024-09-24')
    const endDate = new Date('2024-09-24')
    const totalExpenses = calculator.calculateExpensesInTimeSpan(startDate, endDate)
    expect(totalExpenses).toEqual(500)
  })

  it('should calculate the net balance in a specific time span', () => {
    const startDate = new Date('2024-09-24')
    const endDate = new Date('2024-09-25')
    const netBalance = calculator.calculateNetBalanceInTimeSpan(startDate, endDate)
    expect(netBalance).toEqual(0)
  })
})