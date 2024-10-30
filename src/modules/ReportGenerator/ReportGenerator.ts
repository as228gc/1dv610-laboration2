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
  private firstDate: Date
  private lastDate: Date

  /**
   * Creates a ReportGenerator instance.
   *
   * @param { TransactionProcessor } processor - A transaction processor for handling transaction to be included in the report.
   */
  constructor(processor: TransactionProcessor) {
    this.calculator = new TransactionCalculator(processor)
    this.summarizer = new CategorySummarizer(processor.getTransactions())
    this.firstDate = processor.sortByDate()[0].getDate()
    this.lastDate = processor
      .sortByDate()[processor.getNumberOfTransactions() - 1]
      .getDate()
  }

  /**
   * Generates a report that covers all transactions.
   *
   * @returns { Report } A report containing a summary of all transactions.
   */
  generateReport(): Report {
    // Get the transactions with the earliest and latest date
    const report: Report = new Report(
      this.calculator.calculateTotalIncome(),
      this.calculator.calculateTotalExpenses(),
      this.calculator.calculateTotalNetBalance(),
      this.firstDate,
      this.lastDate,
      this.summarizer.summarizeCategories().incomeByCategory,
      this.summarizer.summarizeCategories().expenseByCategory
    )

    return report
  }
}