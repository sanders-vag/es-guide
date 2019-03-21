Modules can be imported with the syntax:

```javascript
import package from "module-name";
```

Where `module-name` is either a module loaded as a dependency (_react-dom_, _rxjs_, etc) or as a relative path to a local module (_../components/search/Search_). A package can be imported when is exported first in its file. You can export as many packages as needed, for instance:

```javascript
const a = "A";
const b = "B";
export { a, b };
```

Then, you can import the package in other file using as follows:

```javascript
import { a } from "./module";
// or
import { a, b } from "./module";
```

You can also set a package as default export with `export default`:

```javascript
function getDescription() {
    //...
}

export default getDescription;
```

A package declared as `export default` will be imported as:

```javascript
import getDescription from "./module";
```
