import { ExpenseCategory, IncomeCategory, Transaction } from "../src";
import { ExpenseTransaction } from "../src/modules/Transaction/ExpenseTransaction/ExpenseTransaction";
import { IncomeTransaction } from "../src/modules/Transaction/IncomeTransaction/IncomeTransaction";

const transactions: Array<Transaction> = []
let testValue = 100
let totalExpenses = 0
let totalIncome = 0

// Create expense transactions
for (let i = 0; i < 5; i++) {
  transactions.push(
    new ExpenseTransaction(
      new Date('2024-09-23'),
      testValue,
      i.toString(),
      ExpenseCategory.FOOD
    )
  )
  totalExpenses += testValue
}

for (let i = 0; i < 5; i++) {
  transactions.push(
    new ExpenseTransaction(
      new Date('2024-09-24'),
      testValue,
      (i + 5).toString(),
      ExpenseCategory.TRANSPORT
    )
  )
  totalExpenses += testValue
}

// Create income transactions
for (let i = 0; i < 5; i++) {
  transactions.push(
    new IncomeTransaction(
      new Date('2024-09-25'),
      testValue,
      (i + 10).toString(),
      IncomeCategory.SALARY
    )
  )
  totalIncome += testValue
}

for (let i = 0; i < 5; i++) {
  transactions.push(
    new IncomeTransaction(
      new Date('2024-09-26'),
      testValue,
      (i + 15).toString(),
      IncomeCategory.GIFT
    )
  )
  totalIncome += testValue
}

type TransactionMock = {
  transactions: Array<Transaction>,
  totalIncome: number,
  totalExpenses: number,
  netBalance: number,
  startDate: Date
  endDate: Date
}

export const mock: TransactionMock = {
  transactions: transactions,
  totalIncome: totalIncome,
  totalExpenses: totalExpenses,
  netBalance: totalIncome - totalExpenses,
  startDate: new Date('2024-09-23'),
  endDate: new Date('2024-09-26')
}