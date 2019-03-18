Before ES2015 variables were always declared as `var` and they had the scope of the function where they were defined. 
This means declaring a `var` outside a function means its scope is global. Declaring a var inside a block delimited by curly braces `{}`, did not create a new scope. 

#### let and const

ES2015 introduces two new modifiers: `let` and `const` which have a more delimited scope. With `var` you could override the value of a variable defined global by declaring it again in your function.

 When defining a variable using **let**, its scope is limited to the block, statement or expression where it is defined.
 
 When defining a variable using **const**, its value can never changed. 