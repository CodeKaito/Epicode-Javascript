/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(first, second) {
    return (first !== second) ? first+second : (first+second)*3;
   }
   
   /* ESERCIZIO 2
    Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
   */
   
   function boundary(num) {
    return (num > 20 && num <= 100 || num === 400) ? true : false;
   }
   
   /* ESERCIZIO 3
    Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
   */
   
    function reverseString(inputString) {
        if (typeof inputString !== "string") {
          console.log("Input errato, inserisci una stringa");
          return; // Exit the function if input is not a string
        }
      
        let newArray = [];
        for (let i = inputString.length - 1; i >= 0; i--) {
          newArray.push(inputString[i]);
        }
      
        return newArray.join('');
      }
   
   /* ESERCIZIO 4
    Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
   */
   
   function upperFirst(inputString) {
    if (typeof inputString !== "string") {
          console.log("Input errato, inserisci una stringa");
          return; // Exit the function if input is not a string
        }
       let array = inputString.split(` `);
       let result = [];
       for (let i = 0; i < array.length; i++) {
            result.push(array[i][0].toUpperCase() + array[i].slice(1));
       }
       return result.join(" ");
   }
   
   /* ESERCIZIO 5
    Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
   */
   
   function giveMeRandom(n) {
           let result = [];
           for (let i = 0; i < n; i++) {
               result.push(Math.floor(Math.random()*10));
           } 
           return result;
       }
   
   //EXTRA:
   /* ESERCIZIO 1
    Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
   */
   
   function area(l1,l2) {
    return (l1 === l2) ? l1*l2 : (l1*l2)/2;
   }
   
   /* ESERCIZIO 2
    Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
    Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
   */
   
   function crazyDiff(input) {
       let calc = Math.abs(input - 19);
       return (calc > 19) ?  calc*3 : calc;
      }
   
   /* ESERCIZIO 3
    Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
    La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
   */
   
   function codify(input) {
       const string = "code";
       return (input.startsWith(string)) ? input : string + input;
    }
   
   /* ESERCIZIO 4
    Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
    La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
    SUGGERIMENTO: operatore modulo
   */
   
   function check3and7(num) {
    if (typeof num === "number") { 
     return (num%3 === 0 || num%7 === 0) ? true : false;
    } else {
     console.log("Errore, inserisci un numero");
    }
   }
   
   /* ESERCIZIO 5
    Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
   */
   
   function cutString(string) {
    if (typeof string !== "string") {
       return console.log("Errore, inserisci una stringa");
        }
        return string.slice(1, string.length - 1);
   }

  //  const cutString = string => {
  //   if (typeof string !== "string") {
  //     console.log("Errore, inserisci una stringa");
  //     return;
  //   }
  //   return string.slice(1, -1);
  // };

  // const cutString = string => typeof string === "string" ? string.slice(1, -1) : console.log("Errore, inserisci una stringa");

  const numbers = [1, 2, 3, 4, 5];

  const sum = numbers.reduce((a, b) => {
    console.log("accumulator: " + a);
    console.log("currentValue: " + b)
    return a + b;
  }, 0);
  
  console.log(sum); // Output: 15