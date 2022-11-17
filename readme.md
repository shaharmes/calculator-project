# Calculator 

## Part I:
1. ~Create your project using npm init~
2. Using npm, add your favorite CSS framework
3. ~Implement the main layout and wireframe of the calculator (that is, the grid of all buttons
and other elements)~
4. ~Add the relevant UI elements in their locations according to the given diagram~
a. ~Only the elements shown in the main panel should be added in this part~
b. ~Don’t try to implement their functionally yet, you will do it later~
5. ~Give an ID for each button and element in the UI~
6. ~For each element, set its styling configuration (color, hover,clicked etc.)~
a. ~Remember, there should be a light and dark mode for the app.~
b. ~In this part you should only build these two modes and pick one as the active style
(using css), in next stages we will allow the user to toggle between the two modes.~

7. ~Read, learn, and experiment with the onClick event.~
8. ~Read, learn, and experiment with the alert function.~
9. ~Implement the “info” button functionality so that when the user clicks on the info icon an
alert popup will be open with the following information:~
a. ~Developer’s name~
b. ~Calculator’s version (stage)~
c. ~Short description of this app~
d. ~Each piece of information should be written in its own separated line~
10. ~For each button add an onclick event calling the displayButtonInfo function.
a. You should add a “displayButtonInfo (value)” function to your html, this function will
call alert and display the given value passed to it so that clicking on a button will
alert a message with its name (for instance, clicking on 9 will pop a message with the
message 9, clicking on + will pop the message “+”.~

11. ~Build config.html file
This page should have a form with the following elements:~
a. ~Dropdown list, allowing the user to choose page’s background color (list of 5 colors).
Bonus, try to embed a palette chose competent to your form~
b. ~Dropdown list, allowing the user to choose pages font family (list of 5).~
c. ~Radio button selecting light or dark mode.~

12. ~Build help.html file
This page should have the following information displayed:~
a. ~Developers’ name~
b. ~Calculators’ version~
c. ~Description of this app~
d. ~For now, all his info should be “hard-coded” to the html file, we will later-on refactor
this and make the content “dynamic” using JavaScript.~

13. ~Push everything you have built to git repo~

## Part II:
### Notes:
- ~Your UI implementation should answer all the visual requests/requirements listed in the~
spec above
- ~Your styling definitions for this project should be saved independently as an external *.css
file(s).~
- ~In this stage you can write in-code JavaScript functions within the HTML file, on next stages
you must write all your JavaScript code in separated *.js designated file(s).~

1. ~Add js folder to your project and add to it application.js and calculator.js files
a. Functions which are relevant to UI management, application state and general
functionally should be implemented in the application.js file.
b. Functions which are relevant to the calculation logic and state should be
implemented in the calculator.js file.
c. Make sure that by the end of this part implementation you don’t have any JavaScript
code left in your HTML file.~

2. ~Build the basic calculator logic by implementing calculator.js as follows:
a. The calculator.js should hold the current value calculated
b. The calculator.js should hold the value of the first operand (if exists)
c. The calculator.js should hold the current operator (if exists)
d. The calculator.js should hold the value of the second operand (if exists)
e. The calculator should be able to eval the two operands and operator and set the
result as the current value.
f. The calculator should be able to get an input value parse it and act as follows:
i. Identify the given value type operator or operand (digit or symbol)
ii. If your previous given value was a digit and you currently parsed also a digit
“add” it to your current operand by concatenating it. (for example 2 after 2
should be evaluate as 22)
iii. If you parsed an operand while both operands are not empty, you should
automatically evaluate the expression and set the result as the value of the
first operand and set the input parsed operator as the new current operator
iv. If you parsed an operator after parsing an operator you should replace the
current operator with the new one and wait for the second operand to be
parsed. (for example if you had + and after – your current operator should
be -)~

3. Build the basic calculator UI event listeners to set operands and operators values to the
calculator
a. “Listen” to digits and operators’ buttons onclick and pass the value to the
application.js according to your inner implementation.
b. ~Implement the eval (=) button by calling an eval command on the calculator.js and
display the result as alert() event.~

4. ~Implement the reset button functionality
a. Clicking on the clear (C) button should trigger a call to clear all current operator and
operands values of the calculator~

5. ~Implement the back button
a. Clicking on the back button should trigger a call to clear the last value parsed
(operator or operand)~

6. Implement the on\off buttons state functionality, each button should toggle its state in the
application.js variables.
a. Clicking on the light, history, scientific, or remote buttons should trigger a function
that will change the state
7. Push everything you have built to git repo