ES2015 introduces classes as other programming languages. You can declare a class with the syntax `class MyClass` and you can create instances using `new MyClass()`. This also enables inheritance by using the keyword `extends`.

You can define a constructor by defining the method `constructor` and it can accept arguments, otherwise the default constructor applies. The default constructor does not accept any arguments.

##### Example of class

```javascript
class Animal {
  constructor(legs, name) {
    this.legs = legs;
    this.name = name;
  }

  getDescription() {
    return (
      "Hi! My name is " + this.name + " and I have " + this.legs + " legs."
    );
  }
}
```

##### Example of inheritance

```javascript
class Dog extends Animal {
  constructor(name, race) {
    super(4, name);
    this.race = race;
  }

  static sound() {
    return "barf";
  }

  getDescription() {
    return super.whoAmI() + " My race is " + this.race + ".";
  }
}

const bobbie = new Animal(4, "Bobbie");

console.log(bobbie.getDescription()); // Hi! My name is Bobbie and I have 4 legs.

const bobbieDog = new Dog("bobbie", "yorkshire");

console.log(bobbieDog.getDescription()); // Hi! My name is Bobbie and I have 4 legs. My race is yorkshire.

console.log(Dog.sound()); // barf
```
