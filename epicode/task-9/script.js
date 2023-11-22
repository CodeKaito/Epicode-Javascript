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
   
   function reverseString(string) {
    let newArray = [];
    let result = '';
    for (let i = string.length - 1; i >= 0; i--) {
        newArray.push(string[i]);
        result = newArray.join('');
    };
    return result;
   }

//    let string = "hello";
//    console.log(string[string.length - 1]);
   
   /* ESERCIZIO 4
    Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
   */
   
//    function upperFirst(string) {
//     const posizioneSpace = string.indexOf(' ');
//     const posizioneAfterSpace = posizioneSpace +1;
//     for (let i = 0; i < string.length; i++) {
//         if (string[0] === string[0].toUpperCase()) {
//             console.log(string[0].toUpperCase());
//         } else if (string[posizioneAfterSpace]) {
//             console.log(string[posizioneAfterSpace].toUpperCase());
//         }
//         }
//     }

    // upperFirst("string hello");
    function upperFirst2(string) {
        const posizioneSpace = string.indexOf(' ');
        if (posizioneSpace !== -1) {
            // Se c'è uno spazio nella stringa
            const posizioneAfterSpace = posizioneSpace + 1;
            string = string.charAt(0).toUpperCase() + string.slice(1, posizioneAfterSpace) + string.charAt(posizioneAfterSpace).toUpperCase() + string.slice(posizioneAfterSpace + 1);
        } else {
            // Se non c'è uno spazio nella stringa
            string = string.charAt(0).toUpperCase() + string.slice(1);
        }
    
        return string;
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
   
//    function codify(input) {
//     const string = "code";
//     return (input.includes(string) && input.charAt(0) === "c" && input.charAt(1) === "o" && input.charAt(2) === "d" && input.charAt(3) === "e") 
//     ? input : string + input;
//    }

//    function codify(input) {
//     const string = "code";
//     return (input.startsWith(string)) ? input : string + input;
//     }

//     let result = codify("coqdeswmarco");
//     console.log(result);

/* ESERCIZIO 4
    Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
    La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
    SUGGERIMENTO: operatore modulo
   */
   
   /* SCRIVI QUI LA TUA RISPOSTA */
   
   /* ESERCIZIO 5
    Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
   */
   
    // function cutString(string) {
    //     if (typeof string !== "string") {
    //         return console.log("Errore, inserisci una stringa");
    //     }

    //     return string.slice(1, string.length - 1);
    // }

    // let output = cutString('bellissimo');
    // console.log(output);

    // function findNeedle(haystack) {
    //     if (haystack.includes("needle")) {
    //         let position = haystack.indexOf("needle");
    //         return "found the needle at position " + position;
    //     }
    // }

    // let output =  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
    // console.log(output);




