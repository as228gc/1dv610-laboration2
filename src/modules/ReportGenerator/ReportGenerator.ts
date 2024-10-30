/**
 * @author Alex Söderberg <as228gc@student.lnu.se>
 * @module ReportGenerator
 * @version 0.1
 */

import { TransactionProcessor } from "../TransactionProcessor/TransactionProcessor";
import { Report } from "../Report/Report";
import { TransactionCalculator } from "../TransactionCalculator/TransactionCalculator";
import { CategorySummarizer } from "../CategorySummarizer/CategorySummarizer";

/**
 * Represents a report generator.
 */
export class ReportGenerator {
  private calculator: TransactionCalculator
  private summarizer: CategorySummarizer
  private processor: TransactionProcessor

  /**
   * Creates a ReportGenerator instance.
   *
   * @param { TransactionProcessor } processor - A transaction processor for handling transaction to be included in the report.
   */
  constructor(processor: TransactionProcessor) {
    this.calculator = new TransactionCalculator(processor)
    this.summarizer = new CategorySummarizer()
    this.processor = processor
  }

  /**
   * Generates a report that covers all transactions.
   *
   * @returns { Report } A report containing a summary of all transactions.
   */
  generateReport(): Report {
    const firstDate = (
      this.processor
        .sortByDate()[0]
        .getDate()
    )

    const lastDate = (
      this.processor
        .sortByDate()[this.processor.getNumberOfTransactions() - 1]
        .getDate()
    )

    const transactions = this.processor.getTransactions()

    return new Report(
      this.calculator.calculateTotalIncome(),
      this.calculator.calculateTotalExpenses(),
      this.calculator.calculateTotalNetBalance(),
      firstDate,
      lastDate,
      this.summarizer.summarizeCategories(transactions).incomeByCategory,
      this.summarizer.summarizeCategories(transactions).expenseByCategory
    )
  }

  generateReportByTimeSpan(startDate: Date, endDate: Date) {
    const transactions = this.processor.filterByTimeSpan(startDate, endDate)
    return new Report(
      this.calculator.calculateIncomeInTimeSpan(startDate, endDate),
      this.calculator.calculateExpensesInTimeSpan(startDate, endDate),
      this.calculator.calculateNetBalanceInTimeSpan(startDate, endDate),
      startDate,
      endDate,
      this.summarizer.summarizeCategories(transactions).incomeByCategory,
      this.summarizer.summarizeCategories(transactions).expenseByCategory
    )
  }
}