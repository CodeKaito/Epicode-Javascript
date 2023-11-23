//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il piú grande tra due numeri interi.
*/
let num1 = 1;
let num2 = 2;
if (num1>num2) {
 console.log("Il numero piú grande é: " + num1);
} else {
 console.log("Il numero piú grande é: " + num2);
}

(num1>num2) ? console.log("Il numero piú grande é: " + num1) : console.log("Il numero piú grande é: " + num2);

console.log(Math.max(num1, num2));

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

if ( num < 5 ) {
 console.log("Tiny");
} else if ( num < 10 ) {
 console.log("Small");
} else if ( num < 15 ) {
 console.log("Medium");
} else if ( num < 20 ) {
 console.log("Large");
} else if ( num >= 20 ) {
 console.log("Huge");
}

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for(i=0; i<=10; i++) {
 if ((i===3) || (i===8)) {
  continue;
 }
 console.log(i);
}

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for(i=0; i<=10; i++) {
    if (i===0) {
     console.log(i + ' é un zero');
    } else if (i%2===0) {
     console.log(i + ' é pari');
   } else {
     console.log(i + ' é dispari');
   }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let num1 = 4;
let num2 = 4;
if ((num1 === 8) || (num2 === 8)) {
 console.log("Sicuramente, uno dei valori é 8!");
} else if (((num1+num2) === 8) || ((num1-num2) === 8) || ((num2-num1) === 8)) {
 console.log("L'addizione o la sottrazione fra le due variabili é uguale a 8");
}


/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'Ã¨ una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let carrello = 25;
let totalShoppingCart = 0;
totalShoppingCart = (shoppingCart > 50) ? shoppingCart : totalShoppingCart = shoppingCart + 10;

/* ESERCIZIO EXTRA 3
  Oggi é il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, 
  se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

let carrello = 25;
let sconto = (carrello/20) * 100;
let totale = (sconto > 50) ? 0 : sconto+=10;

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

isMale = false;
let gender = (isMale) ? 'male': 'female';

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia é multiplo di 3 (operatore modulo!), 
  stampa al suo posto la parola "Fizz" e se il numero é multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for(i=0; i<=100; i++) {
    if ((i%3 === 0) && (i%5 === 0)){
     console.log(i + " FizzBuzz");
    } else if (i%3 === 0) {
    console.log(i + " Fizz");
    } else if (i%5 === 0) {
    console.log(i + " Buzz");
    }
}

// Esercizio 1: condizioni con ausilio di operatori logici
// Maggiore e minore
// Scrivi un programma che dati quattro numeri, restituisca in output il maggiore e il minore. 

// Esempio:
// Input: a = 3, b = -1, c = 4, d = -2
// Output: maggiore = 4, minore = 2

let a = 3;
let b = -1;
let c = 4;
let d = -2;

let maggiore = 0;
let minore = 0;

// Trova il maggiore
if ((a > b && a > c && a > d) || (b > a && b > c && b > d) || (c > a && c > b && c > d)) {
    maggiore = (a > b && a > c && a > d) ? a : ((b > a && b > c && b > d) ? b : c);
} else {
    maggiore = d;
}

// Trova il minore
if ((a < b && a < c && a < d) || (b < a && b < c && b < d) || (c < a && c < b && c < d)) {
    minore = (a < b && a < c && a < d) ? a : ((b < a && b < c && b < d) ? b : c);
} else {
    minore = d;
}

console.log("maggiore = " + maggiore + ", minore = " + minore);


// Esercizio 2: stringhe e numeri
// Quanti anni ha?
// Scrivi un programma che dato l’anno corrente e un anno di nascita determini:

// l’età della persona
// quanti anni sono necessari per raggiungere i 100
// Esempio:
// Input: anno corrente = 2021, anno di nascita = 1996
// Output: età = 25, anni mancanti = 75

let annoCorrente = 2023;
let annoDiNascita = 1997;
console.log("anno corrente = " + annoCorrente + ", anno di nascita = " + annoDiNascita);
let etá = annoCorrente-annoDiNascita;
let anniMancanti = 100-etá;
console.log("etá =" + etá + ", anni mancanti = " + 75);

// Esercizio 3: Ciclo for
// Progetta un algoritmo in Javascript che stampi tutte le coppie di numeri naturali la cui somma è un numero intero a scelta.

// Esempio
// Input: numero 7
// Output: 
// 0-7
// 1-6
// 2-5
// 3-4
// 4-3
// 5-2
// 6-1
// 7-0

let input = 10;
for (let i = 0, k = input; i < input+1; i++, k--) {
    console.log(i + " - " + k);
}

// Esercizio 4: metodo e proprietà
// Il conta cifre
// Scrivi un programma che dato un numero conti da quante cifre è formato.

// Esempio
Input: numero: 245
Output: numero cifre: 3

function contaCifre(numero) {
    let inputStringify = numero.toString();
    let res = inputStringify.length;
    console.log(res);
    return res;
}

// contaCifre(245);