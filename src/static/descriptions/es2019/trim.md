ES2019 introduces to methods to trim a string: `trimStart` and `trimEnd`. To trim means to remove blank characters from a string.

`trimStart` will remove any blank character found at the beginnig of a string.

`trimEnd` will remove any blank character found at the end of a string.

```javascript
const text = '   butter   ';
const a = text.trimStart() //a='butter   '
const b = text.trimEnd() //b='   butter'
```