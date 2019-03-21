This feature allows to omit the exception on a `catch` block.

##### Example

```javascript
try {
  throw Error('an error occurred');
} catch {
  console.log('OMG There was an error but I ignore the cause');
}
```