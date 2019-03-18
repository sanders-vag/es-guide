In ES2018 the spread operator is improved as one can use it together with destructuring to store the rest of the elements that are not extracted to named variables. For instance:

 ```javascript 
 const a = [1,2,3,4,5]
 const {first, second, ...rest} = a //first=1, second=2, rest=[3,4,5]
```

It also works with objects.