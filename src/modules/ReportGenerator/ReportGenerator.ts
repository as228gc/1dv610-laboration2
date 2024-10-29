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
    this.summarizer = new CategorySummarizer(processor)
    this.processor = processor
  }

  /**
   * Generates a report that covers all transactions.
   *
   * @returns { Report } A report containing a summary of all transactions.
   */
  generateReport(): Report {
    // Get the transactions with the earliest and latest date
    const firstDate: Date = 
      this.processor
        .sortByDate()[0]
        .getDate()

    const lastDate: Date = 
      this.processor
        .sortByDate()[this.processor.getTransactions().length - 1]
        .getDate()

    const report: Report = new Report(
      this.calculator.calculateTotalIncome(),
      this.calculator.calculateTotalExpenses(),
      this.calculator.calculateTotalNetBalance(),
      firstDate,
      lastDate,
      this.summarizer.summarizeCategories().incomeByCategory,
      this.summarizer.summarizeCategories().expenseByCategory
    )

    return report
  }
}