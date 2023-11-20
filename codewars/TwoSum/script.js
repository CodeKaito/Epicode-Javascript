//? Ex.4 (Hard) - Dato un array di numeri interi (nums) ed un numero intero (target), ritornare i 2 indici degli elementi nell’array nums che, sommati, restituiscano il numero target.
//? Assumere che ogni nums fornito in input accetti solo una soluzione e che questo contenga solo numeri diversi fra loro.
// Esempio:
// Input: nums = [4, 9, 11, 13] , target = 22
// Output: [1,3]

let nums = [4, 9, 11, 13];
let resultArray = [];
let target = 22;
let test = false;

for (let i = 0; i < nums.length; i++) {
    for (let k = 0; k < nums.length; k++) {
        if (i !== k && nums[i] + nums[k] === target) {
            resultArray.push(i, k);
            test = true; // Imposta test su true quando trovi una soluzione
            break; // Esci dal ciclo interno una volta trovata una soluzione
        }
    }
    if (test) {
        break; // Esci dal ciclo esterno se hai trovato una soluzione
    }
}

console.log(resultArray);