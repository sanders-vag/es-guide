Arrow functions replace the traditional `function` syntax to simplify writing functions.

The syntax is very simple: `(args) => { content of the function }`.

If the function only has one single parameter, you can omit the parentheses.

If the function has a single statement, you can omit the brackets, then the statement would be implicit returned.

##### Example using function

```javascript
function sum10(number) {
  return number + 10;
}

function sum(a, b) {
  return a + b;
}
```

##### Example using arrow function

```javascript
const sum10 = number => number + 10;
const sum = (a, b) => a + b;

const sumAndPrint = (a, b) => {
  const result = a + b;
  console.log(a + "+" + b + " is equal to " + result);
  return result;
};
```

You can even omit the arrow function if you are calling a function with the same paramater as yours:

```javascript
const print1 = x => console.log(x);
const print2 = console.log;

print1(20); //20
print2(20); //20
```

#### Use of `this``

The use of the keyword `this` is not very easy to understand and within arrow functions it does not getter better. Arrow functions inherit the scope from the execution context. This is the reason why they should not be used as constructors or even function members in classes:

```javascript
class Animal {
  constructor(legs, name) {
    this.legs = legs;
    this.name = name;
  }

  getDescription = () => "Hi! My name is " + this.name + " and I have " + this.legs + " legs." //this.name and this.legs are undefined
}


class Animal {
  constructor(legs, name) {
    this.legs = legs;
    this.name = name;
  }

  function getDescription() {
    return "Hi! My name is " + this.name + " and I have " + this.legs + " legs." 
  }
}

```

Regular functions are required when the dynamic context is not necessary.