Two new methods are included in the `String` object: `padStart` and `padEnd`.

Padding means to add characters to a string until its length if the desired. Both methods accept as first argument the **desired length** for the string and, optionally, as a second parameter, the **character to be added** to the string. If the second parameter is not present, **blank spaces** will be added.

##### Example

```javascript
const text = "butterfly";

text.padStart(13); //    butterfly
text.padEnd(13, "-"); //butterfly----
```
