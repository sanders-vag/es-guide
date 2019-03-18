It is possible now to loop over an asynchronous iterator with the syntax `for await - of`. For example:

 ```javascript
for await (const line of readLines(filePath)) {
    console.log(line)
}
```