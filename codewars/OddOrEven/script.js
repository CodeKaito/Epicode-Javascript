//TODO Given a list of integers, determine whether the sum of its elements is odd or even.
//TODO https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
//? Give your answer as a string matching "odd" or "even".

//? If the input array is empty consider it as: [0] (array with a zero).
/*
* Examples:
* Input: [0]
* Output: "even"

* Input: [0, 1, 4]
* Output: "odd"

* Input: [0, -1, -5]
* Output: "even"
* Have fun!
*/

function oddOrEven(array) {                         // Definiamo una funzione chiamata oddOrEven che accetta un array come parametro.
    res = 0;                                        // Inizializziamo una variabile res a 0. Questa variabile sarà utilizzata per accumulare la somma degli elementi dell'array.
   for (i = 0; i < array.length; i++) {             // Iniziamo un ciclo for che itererà attraverso gli elementi dell'array.
     res+=array[i];                                 // Ad ogni iterazione del ciclo, aggiungiamo il valore dell'elemento corrente dell'array alla variabile res, ottenendo così la somma totale degli elementi dell'array.
   }                                                // Chiudiamo il ciclo for
    return res = (res%2 === 0) ? 'even' : 'odd';    // Dopo il ciclo, verifichiamo se la somma res è pari o dispari. Se il resto della divisione per 2 è 0, restituiamo la stringa 'even' (pari), altrimenti restituiamo 'odd' (dispari).
 }                                                  // Chiudiamo la definizione di funzione

oddOrEven([0, 1, 5]);