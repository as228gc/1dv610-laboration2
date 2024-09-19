import { TransactionType } from "../../enums/TransactionType";
import { Transaction } from "../Transaction/Transaction";

export class TransactionProcessor {
  #transactions: Array<Transaction>

  constructor(transactions: Array<Transaction>) {
    this.#transactions = transactions
  }

  addTransaction(transaction: Transaction) {
    this.#transactions.push(transaction)
  }

  getTotalExpenses() {
    let total: number = 0
    for (const transaction of this.#transactions) {
      if (transaction.getType() === TransactionType.EXPENSE) {
        total += transaction.getAmount()
      }
    }
    return total
  }

  getTotalIncome() {
    let total: number = 0
    for (const transaction of this.#transactions) {
      if (transaction.getType() === TransactionType.INCOME) {
        total += transaction.getAmount()
      }
    }
    return total
  }
}