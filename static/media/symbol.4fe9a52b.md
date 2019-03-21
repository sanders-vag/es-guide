When working with `Symbol` now it is possible to add a description that can be logged with `toString` or you can use the `description` field, if needed for debugging purposes.

##### Example

```javascript
const s = Symbol("A symbol");

s.toString(); //Symbol(A symbol)
s.description; //A symbol
```
