ES2015 introduces the class `Map` which is a container that stores data associated to a key. 

A `Map` can be created as a normal _class_, with `new Map()`, which will create an empty map. It is possible also to create a map with initial values with `new Map([[1, 'red'],[2, 'blue'],[3, 'green']])`

One can _add_ and _delete_ items from a map with `myMap.set(1)` or `myMap.delete(1)`.

One can also check if an item is in the map wiht `myMap.has(1)` and check the size of a map with `myMap.size`.

All the items can be deleted from a map with `myMap.clear()`.

 A map has `values()` and `keys()` methods that returns an iterator with the values and a list with the keys, respectively. 