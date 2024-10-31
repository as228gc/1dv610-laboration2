import { ExpenseCategory, IncomeCategory, Transaction } from "../src";
import { ExpenseTransaction } from "../src/modules/Transaction/ExpenseTransaction";
import { IncomeTransaction } from "../src/modules/Transaction/IncomeTransaction";

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
      IncomeCategory.SALARY
    )
  )
  totalIncome += testValue
}

for (let i = 0; i < 5; i++) {
  transactions.push(
    new IncomeTransaction(
      new Date('2024-09-25'),
      testValue,
      IncomeCategory.GIFT
    )
  )
  totalIncome += testValue
}

type TransactionMock = {
  transactions: Array<Transaction>,
  totalIncome: number,
  totalExpenses: number
}

export const mock: TransactionMock = {
  transactions: transactions,
  totalIncome: totalIncome,
  totalExpenses: totalExpenses
}