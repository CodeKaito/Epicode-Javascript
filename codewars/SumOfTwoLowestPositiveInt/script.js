//TODO Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
//? For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//* [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
    // itera per trovare il minimo e tirarlo fuori dal primo array
    // stora il valore in una nuova variabile
    // itera di nuovo per trovare il secondo valore minimo
    // stora il valore in un'altra variabile e poi fai la somma
    let minValue = Infinity; 
    let minValue2 = Infinity;

    for (let item of numbers) {
        // Find the minimum value
        if (item < minValue) {
            minValue2 = minValue; // Update the second minimum value
            minValue = item; // Update the minimum value
        } else if (item < minValue2) {
            minValue2 = item; // Update the second minimum value
        }
    }

    let sum = minValue + minValue2;
    console.log("The sum of the two smallest numbers is: " + sum);
}
sumTwoSmallestNumbers([12, 8, 12, 19, 5])




// function findMinMax() {
//     let Arr = [50, 60, 20, 10, 40];
//     let minValue = Infinity;
//     let maxValue = -Infinity;
 
//     for (let item of Arr) {
 
//         // Find minimum value
//         if (item < minValue)
//             minValue = item;
 
//         // Find maximum value
//         if (item > maxValue)
//             maxValue = item;
//     }
 
//     console.log("Minimum element is:" + minValue);
//     console.log("Minimum element is:" + maxValue);
// }
 
// findMinMax();

