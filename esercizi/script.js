// Esercizio 1: condizioni con ausilio di operatori logici
// Maggiore e minore
// Scrivi un programma che dati quattro numeri, restituisca in output il maggiore e il minore. 

// Esempio:
// Input: a = 3, b = -1, c = 4, d = -2
// Output: maggiore = 4, minore = 2

// let a = 1;
// let b = 1;
// let c = 5;
// let d = 4;

// if (((a < b ) && (a < c) && (a < d)) || ((b > a) && (b > c) && (b > d)))  {
//     console.log("a é la variabile minore e b é il maggiore");
// } else if (((b < a ) && (b < c) && (b < d)) || (( > a) && (b > c) && (b > d)))  {
//     console.log("b é la variabile minore");
// } else if ((c < a) && (c < b) && (c < d)) {
//     console.log("c é la variabile minore");
// } else if ((d < a) && (d < b) && (d < c)) {
//     console.log("d é la variabile minore");
// }


// Esercizio 2: stringhe e numeri
// Quanti anni ha?
// Scrivi un programma che dato l’anno corrente e un anno di nascita determini:

// l’età della persona
// quanti anni sono necessari per raggiungere i 100
// Esempio:
// Input: anno corrente = 2021, anno di nascita = 1996
// Output: età = 25, anni mancanti = 75

// let annoCorrente = 2023;
// let annoDiNascita = 1997;
// console.log("anno corrente = " + annoCorrente + ", anno di nascita = " + annoDiNascita);
// let etá = annoCorrente-annoDiNascita;
// let anniMancanti = 100-etá;
// console.log("etá =" + etá + ", anni mancanti = " + 75);

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
for (let i = 0, k = input; i <= input; i++, k--) {
    console.log(i + " - " + k);
}

// Esercizio 4: metodo e proprietà
// Il conta cifre
// Scrivi un programma che dato un numero conti da quante cifre è formato.

// Esempio
// Input: numero: 245
// Output: numero cifre: 3

// function contaCifre(numero) {
//     let inputStringify = numero.toString();
//     let res = inputStringify.length;
//     console.log(res);
//     return res;
// }

// contaCifre(245);