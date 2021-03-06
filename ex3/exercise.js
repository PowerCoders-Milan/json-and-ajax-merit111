// Let’s see Promise.all

// https://www.freecodecamp.org/news/promise-all-in-javascript-with-example-6c8c5aea3e32/

// Create 3 promises (new Promise) within each call the placeholder API to get some information.

// Call the 3 promises with promise.all:
// - make sure to nadle possible errors
// - once all of them are done, console log the result

// ## Extra

// // When they are all done, update the Dom with the content of the promises






var promise1 = Promise.resolve(3);
var promise2 = 90;
var promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, 'merit');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});