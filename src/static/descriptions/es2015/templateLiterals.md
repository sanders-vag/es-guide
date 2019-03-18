Template literals is a new way of defining strings using backticks instead of quotes. For instance: 

 ```javascript
 const name=`Andrea` 
 ``` 

 With template literals we can define multiline strings in a very simple way: 

 ```javascript
 const description=`this is 
 the band of 
 my childhood`
 ```

 Another useful advantage of template literals against traditional strings is the interpolation of variables. With this approach it is not necessary anymore to append strings using the `+` symbol, variables can be used inside the template literals wrapped by `${...}`: 

 ```javascript
 const name=`Andrea` 
 const salutation=`Hi, my name is ${name}` 
``` 