import { IncomeCategory } from "../../enums/IncomeCategory";
import { Transaction } from "./Transaction";

export class IncomeTransaction extends Transaction {
  private category: IncomeCategory;

  constructor(date: Date, amount: number, category: IncomeCategory) {
    super(date, amount);
    this.category = category;
  }

  public getCategory(): IncomeCategory {
    return this.category;
  }
}