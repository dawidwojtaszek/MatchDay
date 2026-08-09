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

//console.log("A")
//setTimeout → "B1"
//Promise.resolve().then → "D1"
//setTimeout → "B2"
//Promise.resolve().then → "D2"
//console.log("C")
//
const start = Date.now();

while (Date.now() - start < 100) {
  console.log("xxx ");
}
