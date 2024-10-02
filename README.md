# Transaction manager and report module

This module is used to get reports by time and generate a report depending on given constraints. The module could also be used to handle and categorize transactions.

## Installation guide:<br/>
Write ```npm i tra-ma``` in console. Verify that the version is 1.0.4 in your package.json.

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
The module is built using TypeScript. <br>
The module is tested using the npm library Jest. [Link to test report](https://github.com/as228gc/1dv610-laboration2/wiki/Test-report)

For further instructions of how to use the separate classes and enumerations in the module, read the separate README.md files for each class.
Link to README for each class and enums:
* [Enums](src/enums/README.md)
* [Transaction](src/modules/Transaction/README.md)
* [TransactionProcessor](src/modules/TransactionProcessor/README.md)
* [Report](src/modules/Report/README.md)
* [ReportGenerator](src/modules/ReportGenerator/README.md)

You can find a class diagram and the reflections and naming convention in the projects [Wiki](https://github.com/as228gc/1dv610-laboration2/wiki).

Watch [Open Issues](https://github.com/as228gc/1dv610-laboration2/issues) to see future devlopment of the module.
