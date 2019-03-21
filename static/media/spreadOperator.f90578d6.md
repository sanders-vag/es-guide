One of the most useful operators included by ES2015 is the spread operator `...`. With it one can expand arrays, objects and strings.

##### Example with arrays

```javascript
const a = [1, 2, 3];
const b = [...a, 4, 5, 6]; //1,2,3,4,5,6
const [first, ...others] = [b]; //first=1, others=[2,3,4,5,6]
```

##### Example with objects

```javascript
const a = { a: 1, b: "c" };
const b = { ...a, i: false }; // {a:1, b:'c', i:false}
const a2 = { ...a, b: "d" }; // {a:1, b:'d'}
```

##### Example with strings

```javascript
const t = "text";
const array = [...t]; // ['t','e','x','t']
```

##### Example with function argument as array

This operator is useful to define a function argument as an array:

```javascript
const fn = (a, b, c) => a + b + c;
const array = [1, 2, 2];
const result = fn(...array); // 5
```
