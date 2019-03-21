Two new methods can be found in Object: `entries` and `values`.

`Object.values()` returns a list with the property values of a given object.

`Object.entries()` returns a map with the property keys and values of a given object.

Note that in arrays, the key will be the position in the array.

##### Example

```javascript
const phone = {
  brand: "nokia",
  ios: "android"
};
const teachers = ["Jason", "Peter"];

Object.values(phone); //nokia,android
Object.entries(phone); //[[brand,nokia],[ios,android]]

Object.values(teachers); //Jason,Peter
Object.entries(teachers); //[[0,Jason],[1,Peter]]
```
