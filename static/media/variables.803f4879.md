Before ES2015 variables were always declared as `var` and they had the scope of the function where they were defined. 
This means declaring a `var` outside a function means its scope is global. Declaring a var inside a block delimited by curly braces `{}`, did not create a new scope. 

#### let and const

ES2015 introduces two new modifiers: `let` and `const` which have a more delimited scope. With `var` you could override the value of a variable defined global by declaring it again in your function.

 When defining a variable using **let**, its scope is limited to the block, statement or expression where it is defined.
 
 When defining a variable using **const**, its value can never changed. 

 ##### Example using only var

 ```javascript
var global = "3";

for (var i = 0; i < 2; i++) {
  var innerVar = "this is number " + i;
}

global = "4";

console.log(global) //4
console.log(i) //2
console.log(innerVar) //this is number 1
```

##### Example using let and const

```javascript
const global = "3";

for (let i = 0; i < 2; i++) {
  let innerVar = "this is number " + i;
}

console.log(i) // error: i is not defined
console.log(innerVar) // error: innerVar is not defined

global = '4' // error: Assignment to constant variable.
```