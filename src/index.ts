import { attendanceRate, playerLabel } from "./functions.js";

const a = 5;
let b = 5;
// const player = { name: "Lewandowski", goals: 3 };

//  function testFunction(test: boolean) {
//    if (test === true) {
//      console.log("true");
//    } else {
//      console.log("false");
//    }
//  }
interface Player {
  name: string;
}

console.log(typeof attendanceRate(0, 0));
console.log(playerLabel("Adam Maysz"));
