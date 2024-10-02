

<table>
  <tr>
   <td><strong>Name and explanation</strong>
   </td>
   <td><strong>Reflection and rules from Clean Code</strong>
   </td>
  </tr>
  <tr>
   <td>Array&lt;Transaction>
<p>
<strong>filterByCategory</strong>
<p>
Method in class TransactionProcessor
   </td>
   <td><strong>Don’t Add Gratuitous Context</strong>
<p>
At first, the method name was filterTransactionsByCategory. It is obvious by the context that the method handles Transactions, therefore “Transactions” is not needed in the method name.
<p>
<strong>Use descriptive names</strong>
<p>
As mentioned before the context should give a hint about what the method is filtering. But it could also confuse the reader what the method is filtering.
   </td>
  </tr>
  <tr>
   <td><strong>TransactionProcessor</strong>
<p>
Classname
   </td>
   <td><strong>Class names</strong>
<p>
It should be avoided to use the word “Processor” in a class name. The class handles an array of transactions, and that is its only responsibility. Therefore I think it is descriptive, not follow the practice of Clean Code.
   </td>
  </tr>
  <tr>
   <td><strong>expense</strong>
<p>
Variable name
   </td>
   <td><strong>Use searchable names</strong>
<p>
The word “expense” is used as variable name, or part of variable names. This makes the variable hard to find in a document. A large number of matches when searching for a variable, makes it harder to find the one you want.
   </td>
  </tr>
  <tr>
   <td>number
<p>
<strong>calculateNetBalance</strong>
<p>
Method in class ReportGenerator
   </td>
   <td><strong>Pick one word per concept</strong>
<p>
In this case, I chose “calculate” as the key word for every method that calculates something. 
   </td>
  </tr>
  <tr>
   <td><strong>validateAmount</strong>
<p>
Private method in class Transaction
   </td>
   <td><strong>Method names</strong>
<p>
As mentioned in the book, this uses a verb to describe what the method does. But at the same time it does not clarify what it validates. This is because the class has a private field called amount.
<p>
<strong>Avoid mental mapping</strong>
<p>
Because the private field of the class is named amount, it could lead to the reader wondering “Amount of what”, which could lead to a misunderstanding what input the method expects.
   </td>
  </tr>
</table>


Functions


<table>
  <tr>
   <td>Method name
   </td>
   <td><strong>Number of rows</strong>
   </td>
   <td>Reflection
   </td>
  </tr>
  <tr>
   <td>Object
<p>
<strong>summarizeCategories</strong>
<p>
Private method in class ReportGenerator
   </td>
   <td>60
   </td>
   <td><strong>Small!</strong>
<p>
This method contains a lot of code. It could be divided into smaller parts, which would make the code more readable. The size of the method also leads to a lot of comments in the code. This could also be avoided by separating it into smaller methods and documenting each method by itself.
   </td>
  </tr>
  <tr>
   <td><strong>generateReport</strong>
<p>
Method in class ReportGenerator
   </td>
   <td>19
   </td>
   <td><strong>Use descriptive names</strong>
<p>
The name of the method is clear in what it does. Even if the name is clear it does not describe exactly what kind of report the method generates. What time span of transactions is it generating, or what kind of transactions is it making a report of? This could be more clear if the method name included which transactions it covers in the report, like generateReportAll (probably not the best example) to show that the report being returned covers all transactions.
   </td>
  </tr>
  <tr>
   <td><strong>toString</strong>
<p>
Method in class Report
   </td>
   <td>16
   </td>
   <td><strong>Function arguments</strong>
<p>
Even though the method is a common use for returning a string representation of an object, this method also fulfills the wish for no arguments that is mentioned in Clean Code.
   </td>
  </tr>
  <tr>
   <td>number
<p>
<strong>calculateIncome</strong>
<p>
Method in class ReportGenerator
   </td>
   <td>13
   </td>
   <td><strong>Use descriptive names</strong>
<p>
The name is consistent like other methods doing similar things. It is clear that the method, like the other methods using the word ”calculate”, calculates numbers and returns the result.
   </td>
  </tr>
  <tr>
   <td>number
<p>
<strong>calculateExpenses</strong>
<p>
Method in class ReportGenerator
   </td>
   <td>16
   </td>
   <td><strong>Don’t Repeat Yourself</strong>
<p>
This method are very similar to other methods used for calculations. It could perhaps be merged into a more general method to for calculation operations.
   </td>
  </tr>
  <tr>
   <td><strong>Report (constructor)</strong>
<p>
Class name
   </td>
   <td>16
   </td>
   <td><strong>Function arguments</strong>
<p>
I am not sure if this applies to constructors, but in this case, I think it should be mentioned anyway. The constructor takes 7 arguments, which leads to big bulgy declarations when creating an instance of the class. Clean code
   </td>
  </tr>
</table>



This document is a reflection of the application of practices from the book "Clean Code". The purpose is to explain the naming of classes, methods and variables throughout the module.

I had method names like filterTransactionsByCategory, in this case i changed the methods name to filterByCategory because the modules main responsibility is to handle an array of transactions and therefore I do not have to use it in every name of the methods. The results is a shorter and understandable method name, which leads to more readable code.

The variable names I chose are sometimes repetetive and appear in multiple different methods. This could make the ability to search for specific variables harder as there are several results. Variables like transaction, income, and expense are used throughout the module.

Referring to the book Clean Code, it says that you should not use the word "Processor" in a class name. In this module I have created a class called TransactionProcessor, which clearly includes the word "Processor". In this case, the only responsibility of the class is to handle an array of transactions, and in my eyes that is a useful name to understand what the class is used for. Although I could have changed the naming of this class to follow the recommendations of the book, I think that the current naming is not horrible but could of course be improved.

Currently the ReportGenerator has a private method called summarizeCategories, which contains a lot of code, and could also be renamed to be more understandable. This method could be divided in to smaller well named methods, to increase readability for the developer. I did not have the time to improve this in this laboration. Clean Code mentions big functions in chapter 3 (Small!), and I could not follow this practice in this case.

As I am used to write a lot of comments, and been taught to do that, I realize that I have written a lot of redundant comments. My purpose with the written comment is to make it clear for a future reader to understand what I have been writing. But it is actually the wrong approach. The code should be named correctly and clearly show what it is supposed to do. It should not need a comment describing what it does. 

Overall, I have improved as a developer during the building of this module. I have learnt some new technologies, as using TypeScript and deploying code to npm. Also I have understood the importance of making class diagrams parallel to the programming. It increases the structuring and makes it easier for me as a developer to know what to make.
