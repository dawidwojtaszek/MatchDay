console.log("A");
//SetTimeout 1
setTimeout(() => {
  console.log("B1");
}, 0);
// Promise 1
Promise.resolve().then(() => {
  console.log("D1");
  Promise.resolve().then(() => console.log("D1-nested"));
});
//setIimeout 2
setTimeout(() => {
  console.log("B2");
}, 0);
Promise.resolve().then(() => {
  console.log("D2");
});
console.log("C");

const start = Date.now();

// Blocking loop: synchronous code blocks the call stack,
// so queued tasks cannot run until the loop finishes.
while (Date.now() - start < 3) {
  console.log("xxx ");
}
