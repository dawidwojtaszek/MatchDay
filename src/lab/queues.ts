console.log("1 sync");
const myPromise = Promise.resolve("test");

myPromise.then(() => {
  console.log("2 microtask");
});

setTimeout(() => {
  console.log("3 macrotask");
}, 50);
