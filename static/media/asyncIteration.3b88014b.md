It is possible now to loop over an asynchronous iterator with the syntax `for await - of`. Asynchronous iterators return promises instead of the data directly.
Note that, as well as the [await](#await-async) keyword, `for await... of` must be used inside an `async` function.

##### Example

```javascript
function* generateData() {
  yield new Promise(resolve => resolve("hi"));
  yield new Promise(resolve => resolve("hii"));
  yield new Promise(resolve => resolve("hiii"));
  yield new Promise(resolve => resolve("hiiii"));
}

async function readData() {
  for await (const data of generateData()) {
    console.log(data);
  }
}

readData();
// output
// hi
// hii
// hiii
// hiiii
```
