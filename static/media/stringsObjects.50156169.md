Strings include the `repeat` method.

`'Ho'.repeat(3) //hohoho`

Objects include the `is()`, `assign()` and `setPrototypeOf`.

`Object.is(a,b)` checks if two values are the same value
`Object.assign()` shallow copies an object
`Object.setPrototypeOf` sets an object prototype

##### Examples with Object.is()

```javascript
const a = "hello";
const b = "hello";

console.log(Object.is(a, b)); //true
console.log(Object.is(a, "world")); //false

const o1 = { a };
const o2 = { a };
const o3 = o2;

console.log(Object.is(o1, o2)); // false
console.log(Object.is(o3, o2)); // true
```

##### Example with Object.assign()

```javascript

const vehicle = { colour: "red" };
const motorbike = { wheels: 2, minAge: 16 };

const motorbikeVehicle = Object.assign(motorbike, vehicle);

console.log(${motorbikeVehicle.wheels}); //2
console.log(${motorbikeVehicle.minAge}); //16
console.log(${motorbikeVehicle.colour}); //red


```

##### Example with Object.setPrototypeOf()

```javascript
const vehicle = { colour: "red" };
const truck = { wheels: 16, minAge: 20 };
Object.setPrototypeOf(truck, vehicle);

console.log(${truck.colour}); //red
```
