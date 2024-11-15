# tra-ma module

The tra-ma module is a tool made to help the user to get a financial overview of their transactions. The module is built to handle transactions of two types, income and expenses. The transactions can be categorized into different categories. The module can generate a report based on the created transactions. The report will summarize the transactions and categorize them into different categories. The report will also show the total income, total expenses, net balance, and the earliest and latest date of the transactions. 

Example usage:
```ts
const transaction = new ExpenseTransaction(
    new Date('2024-09-23'),
    100,
    "id_123",
    ExpenseCategory.FOOD
) // Creates a transaction with a date, amount, id, and category

const transactions = [transaction] // Creates an array of transactions

const processor = new TransactionProcessor(transactions) // Creates a processor with the transactions

const generator = new ReportGenerator(processor) // Creates a generator with the processor

const report = generator.generateReport() // Generates a report based on the transactions

console.log(report.toString()) // => 
  /*
  Total income: 0

  Total expenses: 100

  Net balance: -100

  Start date: Mon Sep 23 2024
      
  End date: Mon Sep 23 2024
      
  Expense by category:
      food: 100
  Income by category:
  */
```


## Installation guide:<br/>
Write ```npm i tra-ma``` in console. Verify that the version is 1.0.5 in your package.json.

Importing the module:
```ts
import {
         Transaction,
         TransactionProcessor,
         ReportGenerator,
         Report,
         TransactionType,
         ExpenseCategory,
         IncomeCategory
       } from "tra-ma"
```
_______________________________________________________________________________________________________

For further instructions of how to use the separate classes and enumerations in the module, read the separate README.md files for each class.

Link to README for each class and enums:
* [Enums](src/enums/README.md)
* [CategorySummarizer](src/modules/CategorySummarizer/README.md)
* [Transaction](src/modules/Transaction/README.md)
* [IncomeTransaction](src/modules/Transaction/IncomeTransaction/README.md)
* [ExpenseTransaction](src/modules/Transaction/ExpenseTransaction/README.md)
* [TransactionCalculator](src/modules/TransactionCalculator/README.md)
* [TransactionProcessor](src/modules/TransactionProcessor/README.md)
* [Report](src/modules/Report/README.md)
* [ReportGenerator](src/modules/ReportGenerator/README.md)

You can find a class diagram in the projects [Wiki](https://github.com/as228gc/1dv610-laboration2/wiki).

My reflections of the code quality: [Link to reflections](/reflektion.md)

Watch [Open Issues](https://github.com/as228gc/1dv610-laboration2/issues) to see future development of the module.

Link to the module on npm: https://www.npmjs.com/package/tra-ma

The module is built using TypeScript.

The module is tested using the npm library Jest. [Link to test report](/testrapport.md)

If you want to run the tests:
* Download this repository
* Open it up in your IDE
* Compile the application by writing ```npm run build``` in the terminal.
* Run the detailed tests by using the command ```npm run test:detail``` in the terminal
