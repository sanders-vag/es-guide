`await/async` improves the handling of asynchronous execution making them more readable than Promises. This new feature is built on Promises but it wraps up all the boilerplate code for us. 

Just add the keyword `await` before calling a method that returns a promise to use it. 

Note that the method within the `await` is used must be declared as `async`. This function will also return a promise.