import { ExpenseCategory } from "../../enums/ExpenseCategory";
import { Transaction } from "./Transaction";

export class ExpenseTransaction extends Transaction {
  private category: ExpenseCategory;

  constructor(date: Date, amount: number, category: ExpenseCategory) {
    super(date, amount);
    this.category = category;
  }

  public getCategory(): ExpenseCategory {
      return this.category;
  }
}