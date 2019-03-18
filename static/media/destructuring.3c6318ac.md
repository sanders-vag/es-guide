Destructuring is a quick mechanism to extract values from objects and arrays and save them in variables. The syntax is as follows: 

`const {name} = {name: 'John', age: 50}`

 This will extract the name from the object and store it in the variable `name`. The name of the resulting variable can be easily changed: 

`const {name: firstName} = {name: 'John', age: 50}`

 where the resulting variable with the content of the `name` would be `firstName`.

 Destructuring can be used in arrays as well, for instance: 

 `const [first,second,,fifth] = [1,2,3,4,5]`

 The variables `first`, `second` and `fifth` will have `1`, `2` and `5` as values, respectively.