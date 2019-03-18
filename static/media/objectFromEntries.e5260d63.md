This method allows to build up an object from the map of entries. 

```javascript
const entriesArray = [
    ['size', 'M'],
    ['colour', 'green'],
    ['reference', '1999933ZE3']
];
const tShirt = Object.fromEntries(entriesArray);// tShirt={size: 'M', colour: 'green', reference: '1999933ZE3'}
```