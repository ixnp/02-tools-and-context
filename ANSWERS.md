Explain how hoisting allows the printGreeting function to be called before where it's actually written in the file.

printGreeting();
function printGreeting() {
  console.log("isn't JavaScript wonderful?");
}

printGreeting is a function declaration that was declared on the Global Scope. These kinds of functions on this scope can be used before they are declared and the code is executed. 

////////////////////////
Explain why this function called printGoodbye can't be executed until after it's actually written in the file.
printGoodbye(); // this one won't execute!
const printGreeting = () => {
  console.log("That's all, folks!");
}
printGoodbye()

This Function is defined within an expression. Functional expressions are NOT hoisted and cannot be used before they are defined and the code is executed.

Function acts as a keyword that lets JS know it can apply a function but if it's within an expression it will not be able to read it. 