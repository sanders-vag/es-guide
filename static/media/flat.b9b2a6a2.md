ES2019 introduces two new methods in the `Array` object: `flat` and `flatMap`. 

`flat` _flattens_ an array that has multiple dimensions. By default, it flattens to the first level, but the level can be passed as an argument to the function. Passing an `Infinity` is equivalent to unlimited levels.

`flatMap` is a combination of `map` and `flat`. Useful when having a function that returns an array inside the `map` function but the desired output array needs to be flat.