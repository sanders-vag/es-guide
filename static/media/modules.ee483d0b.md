Modules can be imported with the syntax:

 `import package from 'module-name'`

 A package can be imported when is exported in its file. You can export as many packages as needed, for instance: 

 ```javascript
 const a = 'A'
 const b= 'B'
 export {a,b}
 ```

 You can also set a package as default export with `export default`. This will impact the way one can later import these packages. 
A package declared as `export default Sample` will be imported as: 

`import Sample from './module'`

However, a package declared as `export {Sample}` would be imported as:

 `import {Sample} from './module'`