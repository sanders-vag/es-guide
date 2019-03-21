Destructuring is a quick mechanism to extract values from objects and arrays and save them in variables. The syntax is as follows: 

```javascript
const {name} = {name: 'John', age: 50}
```

This will extract the name from the object and store it in the variable `name`. The name of the resulting variable can be easily changed: 

```javascript
const {name: firstName} = {name: 'John', age: 50}
```

where the resulting variable with the content of the `name` would be `firstName`.

Destructuring can be used in arrays as well, for instance: 

```javascript
const [first,second] = [1,2,3,4,5]
```

The variables `first` and `second` will have `1` and `2` as values, respectively.

##### Example

```javascript
const film = {
 genre: 'fantasy',
  title: 'Harry Potter & the prisoner of Azkaban',
  director: 'Alfonso Cuarón',
  year: 2004
};

const years = [1999, 2000, 2001, 2002, 2003, 2004, 2005]

const {title: name, genre} = film
// name=Harry Potter & the prisoner of Azkaban, genre=fantasy

const [first, , , , fifth, sixth] = years
//first=1999,fifth=2004, sixth=2005

```