In ES2015 objects were enhanced with different features: 

#### Simpler syntax to include variables

 ```
 const colour = 'red'
 const redCar = { colour } //this is the same as const redCar = {colour: colour} 
```

#### Prototype

 ```
 const animal = { isAnimal: true}
 const horse = { __proto__: animal } 
 horse.isAnimal //true 
```

#### super()

 Methods from the parent class can be called with the keyword `super`. 

 ```
 const animal = { isAnimal: true, move: () => 'Moving'}
 const horse = {
    __proto__: animal, 
    move: super.move() + ' horse!'
} 
```

#### Dynamic properties 

```
 const x = { ['a' + 10 ]: 'brilliant' } 
 x.a10 // brilliant
```

