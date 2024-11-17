# Reflections

### Chapter 2: Meaningful names:
In my opinion, the majority of the names are chosen wisely and reveals the purpose of the function or variable. However, I know that I could have chosen better names in some of the cases. I have divided classes into smaller classes to easier get the naming of the classes correct. For example, I have created a Summarizer and a Calculator out from the ReportGenerator class. With the new classes and naming I am able to easier communicate the intent of the classes. 

### Chapter 3: Functions

I have refactored functions in the TransactionProcessor class to be able to make them to one liners. The new versions of the class methods is easier to read and makes the overall readability of the class better.
In the CategorySummarizer class there is a method called "summarizeCategories". In the first version, this was a 60 line long method and it was placed in the ReportGenerator class. I moved that method to the CategorySummarizer class and created private methods to make the method easier to read and understand. The method is now 20 lines long and a lot more readable.


### Chapter 4: Comments
With the result of having more readable code in the summarizeCategories method, I could remove comments that were neccesary in the first version. I have had focus on writing better class and method names to be able to minimize the use of comments. I have also removed som comments that was redundant as a result of more self explanatory code.

### Chapter 5: Formatting
By refactoring the code in the TranasactionProcessor class, I have made the code more readable and easier to follow.
I have separated the methods in ReportGenerator into smaller classes, which leads to more structure in the project. The methods within those classes have also been divided into smaller methods to follow the rules of the book Clean code. The methods are placed in a logical order, to minimize the need for scrolling up and down in the file.
I have added DTO (Data Transfer Object) classes to the project to make the transfer of data between classes easier. Before I had return types of "any" in some of the methods. But now when I have created DTO's, I can return a specific type of object.

### Chapter 6: Objects and data structures
I have used data structures to represent the summaries used in the report. I created a SummaryDTO data structure to hold summaries of expenses and income by category, which is then returned by the summarizer. With the help of these data structures, I can send only the neccessary data between classes and make the data accessable.

### Chapter 7: Error handling
I have put som error handling into my code, but not as much as I would like to have. I created som validators to check the input to some of the methods. The module does not handle the errors itself, and I am not sure that is supposed to be handled in the module. My thought was that the error should be thrown from the module and catched in an application using the module. 

### Chapter 8: Boundaries
In this module, I have not used any third party librares or modules. Therefore I am protecting myself from external interface changes. Because I am not dependent on external libraries, I have all control myself to adjust the code as the project evolves. But I have also tried to design the module so that the interfaces should stay the same, for external applications that uses the module's public API.

### Chapter 9: Unit tests
I have created automated tests for all the classes in the project. In this version I have created a mock class to be able to create an array of transactions. This makes the tests more clean, and makes it easier to add new test cases which depends on a transaction array. The automated tests follows at least some of the F.I.R.S.T. principles, however I am not certain that the tests are completely independent of each other. For example, the tests requires that the class Contructor test passes before the other tests can pass. Also, I have not been using the tests as a guide to how I write my code, but rather the opposite. I have implemented a method by how I think the code is supposed to work, and later written tests that confirm that I get the correct output. This is not the optimal way of testing the code according to the F.I.R.S.T principles.
I have been able to make tests that has high coverage of the code, which makes the tests reliable.

### Chapter 10: Classes
This is the chapter that I have focused the most on in this updated version. After version 1 of the module, I realized that I should divide and use smaller classes to follow the single repsonsibility principle.
Extracting TransactionCalculator and CategorySummarizer out of ReportGenerator upholds the single responsibility principle. This also makes the code more testable and easier to navigate.
However, because I split the ReportGenerator into samller classes, there is high coupling between the classes. I have tried to minimize the coupling, but I am not sure that I have succeeded.
I have introduced abstract classes and inheritance to the project. The new abstract Transaction class and the two subclasses allow for polymorphic behavior.

<i>Screenshot of the new ReportGenerator constructor</i>
![image](https://github.com/user-attachments/assets/01aa8689-c35a-4e0c-ba2e-5f69c1ae2a39)


### Chapter 11: Systems
I have divided the system into clear and cohesive modules to make it easier to maintain. As I ahve developed my application for laboration 3, I have noticed that I needed the module to give me more information than it had before. The expansion of the module was easy which makes me think that the design has provided has provided an easy way to expand the module. I have also tried to use dependency injection as good as I can, this provides the ability to create separate classes from the system to use independently.
