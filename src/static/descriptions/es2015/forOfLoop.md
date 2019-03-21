Besides the classic `for` and the `forEach`, ES2015 introduces the `for-of` as an improved `forEach` with the ability to break.

##### Examples using classic for and forEach

```javascript
const array = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < array.length; i++) {
  if (array[i] > 3) {
    break;
  }
  console.log(array[i]);
}
// 1,2,3

array.forEach(console.log); // this cannot break on condition
//1,2,3,4,5,6
```

##### Example using for-of

```javascript
const array = [1, 2, 3, 4, 5, 6];

for (const val of array) {
  if (val > 3) break;
  console.log(val);
}
//1,2,3
const map = [[1, "a"], [2, "b"]];

for (const [key, val] of map) {
  if (val > 3) break;
  console.log(key + "-" + val);
}
//1-a,2-b
```

Note that in this loop we can use `const` as it creates a new scope on each iteration.
