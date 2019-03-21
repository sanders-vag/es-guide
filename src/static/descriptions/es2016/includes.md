ES2016 incorporates a new method as part of the array prototype to determine whether a value is included in the array or not: `Array.prototype.includes()`.

##### Example

```javascript
const array = [1, 2, 3, 5];

array.includes(4); //false
array.includes(1); //true

const a = { a: 1 };
const b = { b: 1 };
const objs = [a, b];

objs.includes(a); //true
```
