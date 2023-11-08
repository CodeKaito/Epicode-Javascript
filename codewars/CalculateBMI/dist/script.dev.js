"use strict";

// TODO Write function bmi that calculates body mass index (bmi = weight / height2).
//* if bmi <= 18.5 return "Underweight"
//* if bmi <= 25.0 return "Normal"
//* if bmi <= 30.0 return "Overweight"
//* if bmi > 30 return "Obese"
// function bmi(weight, height) {
//     let bmi = weight / (height * height);
//     console.log(bmi);
//     if (bmi <= 18.5) {
//         console.log("Underweight");
//         return "Underweight";
//     } else if (bmi <= 25) {
//         console.log("Normal");
//         return "Normal";
//     } else if (bmi <= 30) {
//         console.log("Overweight");
//         return "Overweight";
//     } else if (bmi > 30) {
//         console.log("Obese");
//         return "Obese";
//     }
//   }
function bmi(weight, height) {
  var bmi = weight / (height * height);
  return bmi < 18.5 ? "Underweight" : bmi <= 25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
}