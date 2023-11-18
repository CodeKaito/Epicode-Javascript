// Scrivi un programma che dato un numero N, generi un array di N numeri casuali e stampi sia l'array ottenuto che quello invertito.
//  Esempio:
// Input: N = 5 // lunghezza array
// Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]

// function randomArray(num) {
//     let array = []
//     for (let i = 0; i < num; i++) {
//         array.push(Math.floor(Math.random()*num));
//     }
//     console.log("Questo é l'array ottenuto: " + array);
//     console.log("Questo é l'array ottenuto invertito: " + array.reverse());
//     return array;
// }

// randomArray(5);

// Metti un po' d'ordine
// Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

// Esempio:
// Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
// Output: [8, 7, 6, 5, 5, 3, 2, 1, -4, -2]

// function sortArray(array) {
//     array.sort().reverse();
//     console.log(array);
// }

// sortArray([3, 7, -2, 5, 8, 1, 2, 5, 6, -4])

// Variante:
// Prova ad ordinali in modo crescente.
// function sortArray2(array) {
//     array.sort();
//     console.log(array);
// }

// sortArray2([3, 7, -2, 5, 8, 1, 2, 5, 6, -4])

// Operazioni tra array
//   Scrivi un programma che dati:
  
// 2 array di 10 elementi interi casuali compresi tra 1 e 10,
// il tipo di operazione aritmetica da effettuare, una delle seguenti:
// addizione
// sottrazione
// moltiplicazione
// divisione
// Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

//   Esempio:
//     Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
//     Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

// function operationArray(a, b, operazione) {
//     let result = [];
//     if (operazione === "+") {
//         for (let i = 0, k = 0; i < a.length, i < b.length; i++, k++) {
//             result.push(a[i] + b[k]);
//         }
//         console.log(result);
//     } else if (operazione === "-") {
//         for (let i = 0, k = 0; i < a.length, i < b.length; i++, k++) {
//             result.push(a[i] - b[k]);
//         }
//         console.log(result);
//     } else if (operazione === "*") {
//         for (let i = 0, k = 0; i < a.length, i < b.length; i++, k++) {
//             result.push(a[i] * b[k]);
//         }
//         console.log(result);
//     } else if (operazione === "/") {
//         for (let i = 0, k = 0; i < a.length, i < b.length; i++, k++) {
//             result.push(a[i] / b[k]);
//         }
//         console.log(result);
//     }
// }

// operationArray([1,2], [1,2], "*");

// La tombola magica
//   Scrivi un programma che dato:
  
// un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
// un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
// Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
//   2 numeri uguali => ambo
//   3 numeri uguali => terna
//   4 numeri uguali => quaterna
//   5 numeri uguali => cinquina
//   tutti i numeri uguali => tombola

//   In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
//   in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".
//   (generazione numeri random https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

function tombolaMagica(randomArray, chosenArray) {
    let resultArray = [];
    for (let i = 0; i < chosenArray.length; i++) {
        if (randomArray.includes(chosenArray[i]) === true) {
            resultArray.push(chosenArray[i]);
        }
    }

    if (resultArray.length === 0 || resultArray.length === 1) {
        console.log("Ritenta, sarai piú fortunato!");
    } else if (resultArray.length === 2) {
        console.log(resultArray + " AMBO!");
    } else if (resultArray.length === 3) {
        console.log(resultArray + " TERNA!");
    } else if (resultArray.length === 4) {
        console.log(resultArray + " QUATERNA");
    } else if (resultArray.length === 5) {
        console.log(resultArray + "CINQUINA!");
    } else if (resultArray.length === chosenArray.length) {
        console.log(resultArray + "TOMBOLA!");
    }
}

function rand() {
    let randomArray = [];
     for (let i = 0; i < 10; i++) {
        randomArray.push(Math.floor(Math.random()*90));
     }
     return randomArray;
}

let computer = rand();
let user = [1, 10, 25, 12, 32, 45, 90, 39, 67, 42]
tombolaMagica(computer, user);