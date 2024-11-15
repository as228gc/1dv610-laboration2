# Reflections

### Chapter 2: Meaningful names:
In my opinion, the majority of the names are chosen wisely and reveals the purpose of the function or variable. However, I know that I could have chosen better names in some of the cases. I have divided classes into smaller classes to easier get the naming of the classes correct. For example, I hav ecreated a Summarizer and a Calculator out from the ReportGenerator class. With the new classes and naming I am able to easier communicate the intent of the classes by naming them correctly. 

### Chapter 3: Functions

I have refactored functions in the TransactionProcessor class to be able to make them to one liners. The new versions of the class methods is easier to read and makes the overall readability of the class easier.
In the CategorySummarizer class there is a method called "summarizeCategories". In the first version, this was a 60 line long method and it was placed in the ReportGenerator class. I moved that method to the CategorySummarizer class and created private methods to make the method easier to read and understand. The method is now 20 lines long and a lot more readable.


### Chapter 4: Comments
With the result of having more readable code in the summarizeCategories method, I could remove comments that were neccesary in the first version. I have had focus on writing better class and method names to be able to minimize the use of comments. I have also removed som comments that was redundant.

### Chapter 5: Formatting
By refactoring the code in the TranasactionProcessor class, I have made the code more readable and easier to follow.
I have separated the methods in ReportGenerator into smaller classes, which leads to more structure in the project. The methods within those classes have also been divided into smaller methods to follow the rules of the book Clean code. The methods are placed in a logical order, to minimize the need for scrolling up and down in the file.
I have added DTO (Data Transfer Object) classes to the project to make the transfer of data between classes easier. Before I had return types of "any" in some of the methods. But now when I have created DTO's, I can return a specific type of object.

### Chapter 6: Objects and data structures
I have used data structures to represent the summaries used in the report. I have created a Summa

### Chapter 7: Error handling
I have put som error handling into my code, but not as much as I would like to have. I created som validators to check the input to some of the methods. The module does not handle the errors itself, and I am not sure that is supposed to be handled in the module. My thought was that the error should be thrown from the module and catched in an application using the module. 

### Chapter 8: Boundaries

### Chapter 9: Unit tests
I have created automated tests for all the classes in the project. In this version I have created a mock class to be able to create an array of transactions. This makes the tests more clean, and makes it easier to add new test cases which depends on a transaction array. The automated tests folloew the F.I.R.S.T. principles, howevere I am not certain that the tests are completely independent of each other. For example, the tests requires that the class Contructor test passes before the other tests can pass. 
I have been able to make tests that has high coverage of the code, which makes the tests reliable.

### Chapter 10: Classes
This is the chapter that I have focused the most on in this updated version. After version 1, I realized that I should divide and use smaller classes to follow the single repsonsibility principle.
Splitting out TransactionCalculator and CategorySummarizer out of ReportGenerator upholds the single responsibility principle. This also makes the code more testable and easier to navigate.
However, because I split the ReportGenerator into samller classes, there is high coupling between the classes. I have tried to minimize the coupling, but I am not sure that I have succeeded.
I have introduced abstract classes and inheritance to the project. The new abstract Transaction class and the two subclasses allow for polymorphic behavior.
### Chapter 11: Systems
