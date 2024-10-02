# Transaction manager and report module

This module is used to get reports by time and generate a report depending on given constraints. The module could also be used to handle and categorize transactions.

## Installation guide:<br/>
Write ```npm i tra-ma``` in console. Verify that the version is 1.0.5 in your package.json.

Importing the module:
```
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

Example:
```
const transaction = new Transaction(
    new Date('2024-09-23'),
    testValue,
    TransactionType.EXPENSE,
    ExpenseCategory.FOOD
)

const transactions = [transaction]

const processor = new TransactionProcessor(transactions)

const generator = new ReportGenerator(processor)

const report = generator.generateReport()

console.log(report.toString()) // => Logs the report as a string
```


For further instructions of how to use the separate classes and enumerations in the module, read the separate README.md files for each class.

Link to README for each class and enums:
* [Enums](src/enums/README.md)
* [Transaction](src/modules/Transaction/README.md)
* [TransactionProcessor](src/modules/TransactionProcessor/README.md)
* [Report](src/modules/Report/README.md)
* [ReportGenerator](src/modules/ReportGenerator/README.md)

You can find a class diagram in the projects [Wiki](https://github.com/as228gc/1dv610-laboration2/wiki).

My reflections of the code quality: [Link to reflections](/reflektioner.md)

Watch [Open Issues](https://github.com/as228gc/1dv610-laboration2/issues) to see future development of the module.

Link to the module on npm: https://www.npmjs.com/package/tra-ma

The module is built using TypeScript.

The module is tested using the npm library Jest. [Link to test report](/testrapport.md)

If you want to run the tests:
* Download this repository
* Open it up in your IDE
* Compile the application by writing ```npm run build``` in the terminal.
* Run the detailed tests by using the command ```npm run test:detail``` in the terminal
