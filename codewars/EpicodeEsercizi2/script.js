//! M1 - Epicode - JavaScript Extra Training (Marco Longo)

//* ARRAY:
//? Ex.1 (Easy) - Realizzare un programma che costruisca un array di 20 elementi. Ogni elemento dev'essere pari al proprio indice nell'array.
// Es. [0, 1, 2, 3, 4, 5 ... 19]

// for (let i = 0; i < 20; i++) {
//     console.log(i);
// }

//? Ex.2 (Medium) - Realizzare un programma che, dato un array di numeri interi, stampi in console la media di tutti i valori.
// N.B. Utilizza solo i concetti visti a lezione, niente scorciatoie!

// let array = [1,2,3,4];
// let result = 0;
// for (let i = 0; i < array.length; i++) {
//     result += array[i]/2;
// }
// console.log(result);

//? Ex.3 (Medium) - Realizzare un programma che rimuova i multipli dispari di 3 dall'array riportato sotto.
// N.B. 18 è un multiplo pari di 3, 21 è un multiplo dispari di 3.
// let array = [20, 31, 15, 78, 48, 27, 61, 51]; 

// let array = [20, 31, 15, 78, 48, 27, 61, 51];
// let result = [];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 3 === 0) {
//         result.push(array[i]);
//     }
// }
// console.log(result);

//? Ex.4 (Hard) - Dato un array di numeri interi (nums) ed un numero intero (target), ritornare i 2 indici degli elementi nell’array nums che, sommati, restituiscano il numero target.
//? Assumere che ogni nums fornito in input accetti solo una soluzione e che questo contenga solo numeri diversi fra loro.
// Esempio:
// Input: nums = [4, 9, 11, 13] , target = 22
// Output: [1,3]

// let nums = [4, 9, 11, 13];
// let resultArray = [];
// let target = 22;
// let test = false;

// for (let i = 0; i < nums.length; i++) {
//     for (let k = 0; k < nums.length; k++) {
//         if (i !== k && nums[i] + nums[k] === target) {
//             resultArray.push(nums[i], nums[k]);
//             test = true; // Imposta test su true quando trovi una soluzione
//             break; // Esci dal ciclo interno una volta trovata una soluzione
//         }
//     }
//     if (test) {
//         break; // Esci dal ciclo esterno se hai trovato una soluzione
//     }
// }

// console.log(resultArray);

// nums [0, 1, 2, 3, 4, 5, 6]
// Suggerimento: Sapevi che i cicli for possono essere innestati?