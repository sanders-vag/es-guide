In ES2018 the spread operator is improved as one can use it together with [destructuring](#destructuring) to store the rest of the elements that are not extracted to named variables. For instance:

```javascript
const a = [1, 2, 3, 4, 5];
const { first, second, ...rest } = a; //first=1, second=2, rest=[3,4,5]
```

It also works with objects.

##### Example

```javascript
const film = {
  genre: "horror",
  title: "IT",
  director: "Andy Muschietti",
  year: 2017
};

const years = [1999, 2000, 2001, 2002, 2003, 2004, 2005];

const { genre, title, ...rest } = film; //genre=horror,title=It, rest=[director=Andy Muschietti, year=2017]

const [first, second, ...others] = years; //first=1999,second=2000,others=[2001,2002,2003,2004,2005]
```
