// La tombola magica
// Scrivi un programma che dato:
  
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
        randomArray.push(Math.floor(Math.random()*91));
     }
     return randomArray;
}

let computer = rand();
let user = [1, 10, 25, 12, 32, 45, 90, 39, 67, 42]
tombolaMagica(computer, user);