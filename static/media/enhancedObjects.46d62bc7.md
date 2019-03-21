In ES2015 objects were enhanced with different features:

#### Simpler syntax to include variables

```javascript
const colour = 'red'
const redCar = { colour } //equivalent to: const redCar = {colour: colour}
```

#### Prototype

```javascript
const animal = { isAnimal: true}
const horse = { __proto__: animal }
horse.isAnimal //true
```

#### super()

Methods from the parent class can be called with the keyword `super`.

```javascript
const animal = { isAnimal: true, move: () => 'Moving'}
const horse = {
   __proto__: animal,
   move: super.move() + ' horse!'
}
```

#### Dynamic properties

```javascript
 const x = { ['a' + 10 ]: 'brilliant' }
 x.a10 // brilliant
```
