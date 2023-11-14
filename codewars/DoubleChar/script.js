//TODO Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

//? Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
    // Creiamo una variabile 'result' per immagazzinare la stringa modificata
    let result = '';

    // Iniziamo un ciclo 'for' per iterare attraverso ogni carattere della stringa originale 'str'
    for (let i = 0; i < str.length; i++) {
        // Concateniamo due volte il carattere corrente alla variabile 'result'
        result += str[i] + str[i];
    }

    // Ritorniamo la stringa modificata
    return result;
}

// Chiamiamo la funzione con l'esempio 'String' e stampiamo il risultato
console.log(doubleChar('String')); // Output: "SSttrriinngg"

/*
* 1. `function doubleChar(str) {`: Definiamo una funzione chiamata `doubleChar` che prende una stringa come argomento (`str`).
* 2. `let result = '';`: Creiamo una variabile `result` e la inizializziamo con una stringa vuota. Questa variabile sarà utilizzata per immagazzinare la stringa modificata.
* 3. `for (let i = 0; i < str.length; i++) {`: Iniziamo un ciclo `for` che itera attraverso ogni carattere della stringa originale `str`. La variabile `i` è un contatore che va da 0 fino alla lunghezza della stringa meno uno.
* 4. `result += str[i] + str[i];`: In ogni iterazione del ciclo, concateniamo due volte il carattere corrente (`str[i]`) alla variabile `result`. Quindi, la stringa risultante avrà ogni carattere ripetuto una volta.
* 5. `return result;`: Alla fine della funzione, restituiamo la stringa modificata.
* 6. `console.log(doubleChar('String'));`: Chiamiamo la funzione con l'esempio 'String' e stampiamo il risultato nella console. In questo caso, il risultato sarà "SSttrriinngg".
*/