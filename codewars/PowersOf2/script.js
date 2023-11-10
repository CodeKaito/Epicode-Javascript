//TODO Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

//? Examples
//* n = 0  ==> [1]        # [2^0]
//* n = 1  ==> [1, 2]     # [2^0, 2^1]
//* n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n){
    var result = [];
    for (var i = 0; i <= n; i++) {
      result.push(Math.pow(2, i));
    }
    console.log(result);
    return result;
}

powersOfTwo(2)

//! 1. function powersOfTwo(n){: Inizia con la dichiarazione di una funzione chiamata powersOfTwo che ha un parametro n.
//! 2. var result = [];: Crea una variabile chiamata result e assegna un array vuoto ad essa. Questo array sarà utilizzato per memorizzare i risultati.
//! 3. for (var i = 0; i <= n; i++) {: Inizia un ciclo for che inizia con i uguale a 0, continua fino a quando i è minore o uguale a n, incrementando i di 1 ad ogni iterazione.
//! 4. result.push(Math.pow(2, i));: All'interno del ciclo, calcola 2 elevato alla potenza di i utilizzando Math.pow(2, i) e aggiunge il risultato all'array result utilizzando il metodo push.
//! 5. }: Chiude il blocco del ciclo for.
//! 6. return result;: Restituisce l'array result contenente tutte le potenze di 2 calcolate durante il ciclo.
//!  Quindi, la funzione prende un numero non negativo n come input e restituisce un array contenente le potenze di 2 da 2^0 a 2^n.