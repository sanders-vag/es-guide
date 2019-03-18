ES2015 introduces the class `Set` which is a container of data. 

A `Set` can be created as a normal _class_, with `new Set()`, which will create an empty set. It is possible also to create a set with initial values with `new Set([1,2,3])`

One can _add_ and _delete_ items from a set with `mySet.add(1)` or `mySet.delete(1)`.

One can also check if an item is in the set wiht `mySet.has(1)` and check the size of a set with `mySet.size`.

All the items can be deleted from a set with `mySet.clear()`.

 A set has `values()` and `keys()` methods, both return an iterator with the values. 