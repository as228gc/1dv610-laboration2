import { ExpenseTransaction } from "../Transaction/ExpenseTransaction";
import { IncomeTransaction } from "../Transaction/IncomeTransaction";
import { Transaction } from "../Transaction/Transaction";
import { TransactionProcessor } from "../TransactionProcessor/TransactionProcessor";

export class TransactionCalculator {
  private processor: TransactionProcessor

  constructor(processor: TransactionProcessor) {
    this.processor = processor
  }

  /**
   * Calculates the net balance
   * of all transactions made.
   *
   * @returns The net balance
   */
  public calculateTotalNetBalance(): number {
    return this.calculateTotalIncome() - this.calculateTotalExpenses()
  }

  /**
   * Calculates the total amount of income
   * of all transactions
   *
   * @returns The total income
   */
  public calculateTotalIncome(): number {
    const incomeTransactions = this.processor.filterByType(IncomeTransaction)
    return this.calculateTotal(incomeTransactions)
  }

  /**
   * Calculates the total amount of expenses
   * of all transactions
   *
   * @returns The total expenses
   */
  public calculateTotalExpenses(): number {
    const expenseTransactions = this.processor.filterByType(ExpenseTransaction)
    return this.calculateTotal(expenseTransactions)
  }

  /**
   * Calculates the net balance of transactions made
   * between the given dates.
   *
   * @param startDate The first date of the time span
   * @param endDate The last date of the time span
   * @returns The net balance of the transaction made in the time span
   */
  public calculateNetBalanceByTimeSpan(startDate: Date, endDate: Date): number {
    const totalIncome = this.calculateIncomeInTimeSpan(startDate, endDate)
    const totalExpenses = this.calculateExpensesInTimeSpan(startDate, endDate)
    return totalIncome - totalExpenses
  }

  /**
   * Calculates the total amount of income of transactions made
   * between the given dates.
   *
   * @param startDate The first date of the time span
   * @param endDate The last date of the time span
   * @returns The total amount of income in the time span.
   */
  public calculateIncomeInTimeSpan(startDate: Date, endDate: Date): number {
    const transactionsInTimeSpan = this.processor.filterByTimeSpan(startDate, endDate)
    const incomeTransactions = this.processor.filterByType(IncomeTransaction)

    const incomeTransactionsInTimeSpan = incomeTransactions.filter(transaction => {
      return transactionsInTimeSpan.includes(transaction)
    })

    return this.calculateTotal(incomeTransactionsInTimeSpan)
  }

  /**
   * Calculates the total amount of expenses of transactions made
   * between the given dates.
   *
   * @param startDate The first date of the time span
   * @param endDate The last date of the time span
   * @returns The total amount of expenses in the time span.
   */
  public calculateExpensesInTimeSpan(startDate: Date, endDate: Date): number {
    const transactionsInTimeSpan = this.processor.filterByTimeSpan(startDate, endDate)
    const expenseTransactions = this.processor.filterByType(ExpenseTransaction)

    const expenseTransactionsInTimeSpan = expenseTransactions.filter(transaction => {
      return transactionsInTimeSpan.includes(transaction)
    })

    return this.calculateTotal(expenseTransactionsInTimeSpan)
  }

  /**
   * Calculates and returns the total value of credits covered by an array of transactions.
   *
   * @param transactions An array of transactions of the same transaction type
   * @returns The total amount of credits from the transactions.
   */
  private calculateTotal(transactions: Array<Transaction>): number {
    return transactions.reduce((total, transaction) => {
      return total + transaction.getAmount()
    }, 0)
  }
}