### Complexety of the algorithm
La notazione "O(n^2)" rappresenta la complessità temporale di un algoritmo e indica che il tempo di esecuzione dell'algoritmo cresce quadraticamente con la dimensione dell'input (n). In altre parole, se hai un algoritmo con una complessità temporale di O(n^2) e raddoppi la dimensione dell'input, il tempo di esecuzione approssimativamente quadruplica.

L'espressione "O" (grande O) descrive un limite superiore asintotico del tempo di esecuzione dell'algoritmo. Quindi, quando dici "O(n^2)", stai dicendo che il tempo di esecuzione dell'algoritmo è al massimo proporzionale al quadrato della dimensione dell'input.

Alcuni esempi di algoritmi con complessità O(n^2) sono le ricerche attraverso tutte le coppie di elementi in un array nidificato o l'algoritmo di ordinamento a selezione. Questi algoritmi tendono ad essere meno efficienti su input più grandi rispetto ad algoritmi con complessità temporale inferiore, come O(n) o O(log n).

### Math.abs
Il metodo Math.abs() restituisce il valore assoluto di un numero. Serve per eliminare il - davanti ai numeri negativi.

```javascript
let numeroNegativo = -5;
let valoreAssoluto = Math.abs(numeroNegativo);

console.log(valoreAssoluto); // Stampa: 5
```

### parseInt()
La funzione `parseInt()` in JavaScript viene utilizzata per convertire una stringa in un numero intero. Ecco come funziona:

```javascript
let numeroStringa = "42";
let numeroIntero = parseInt(numeroStringa);

console.log(numeroIntero); // Stampa: 42
```

In questo esempio, `parseInt()` converte la stringa "42" nel numero intero 42. La funzione prende due argomenti: la stringa da convertire e una base numerica opzionale che rappresenta il sistema numerico da utilizzare (ad esempio, base 10 per il sistema decimale).

Esempio con specifica della base numerica:

```javascript
let numeroStringa = "1010";
let numeroBinario = parseInt(numeroStringa, 2);

console.log(numeroBinario); // Stampa: 10
```

In questo caso, `parseInt()` converte la stringa "1010" nel numero 10, interpretandolo come un numero binario (base 2).

È importante notare che `parseInt()` analizzerà la stringa fino a quando incontra un carattere non valido per il sistema numerico specificato, e restituirà il valore numerico ottenuto fino a quel punto.

```javascript
let numeroStringa = "42 anni";
let numeroIntero = parseInt(numeroStringa);

console.log(numeroIntero); // Stampa: 42
```

In questo esempio, `parseInt()` converte la parte iniziale della stringa "42 anni" in 42 e ignora il resto, poiché "anni" non è un numero valido.

### parseFloat()
La funzione `parseFloat()` in JavaScript viene utilizzata per convertire una stringa in un numero a virgola mobile (floating-point). Funziona in modo simile a `parseInt()`, ma restituisce un numero in virgola mobile invece di un numero intero.

Ecco un esempio di utilizzo di `parseFloat()`:

```javascript
let numeroStringa = "3.14";
let numeroVirgolaMobile = parseFloat(numeroStringa);

console.log(numeroVirgolaMobile); // Stampa: 3.14
```

In questo esempio, `parseFloat()` converte la stringa "3.14" nel numero a virgola mobile 3.14.

È importante notare che `parseFloat()` analizzerà la stringa fino a quando incontra un carattere non valido per un numero a virgola mobile, e restituirà il valore numerico ottenuto fino a quel punto.

```javascript
let numeroStringa = "3.14 metri";
let numeroVirgolaMobile = parseFloat(numeroStringa);

console.log(numeroVirgolaMobile); // Stampa: 3.14
```

In questo esempio, `parseFloat()` converte la parte iniziale della stringa "3.14 metri" in 3.14 e ignora il resto, poiché "metri" non è un numero valido.

### Number()
Se hai bisogno di controllare la base numerica o se vuoi una conversione più permissiva di valori non stringa, parseInt() può essere una scelta migliore. Tuttavia, se stai lavorando esclusivamente con stringhe e desideri una conversione più rigorosa, Number() potrebbe essere più adatto.

In JavaScript, `Number()` è un costruttore che può essere utilizzato per convertire un valore in un numero. Può essere utilizzato in due modi principali:

1. **Chiamato come Costruttore:**

   ```javascript
   let numero = new Number("42");
   console.log(numero); // Stampa: [Number: 42]
   ```

   In questo caso, `Number()` viene utilizzato come un costruttore per creare un oggetto di tipo numero. Tuttavia, è meno comune utilizzare `Number()` in questo modo, e generalmente si preferisce l'utilizzo del costrutto letterale per creare numeri.

2. **Chiamato come Funzione:**

   ```javascript
   let stringaNumero = "42";
   let numero = Number(stringaNumero);

   console.log(numero); // Stampa: 42
   ```

   Nella forma più comune, `Number()` è utilizzato come una funzione per convertire un valore in un numero. Accetta un singolo argomento e restituisce il corrispondente valore numerico. Se l'argomento non può essere convertito in un numero, restituirà `NaN` (Not a Number).

   ```javascript
   let stringaNonNumerica = "Ciao";
   let numeroNonNumerico = Number(stringaNonNumerica);

   console.log(numeroNonNumerico); // Stampa: NaN
   ```

`Number()` può essere utilizzato con vari tipi di dati, inclusi booleani, stringhe e oggetti. Tuttavia, è importante notare che la conversione dipende dal tipo di dato fornito come argomento. In alcuni casi, la conversione potrebbe non essere intuitiva.

### .toString()
Il metodo `.toString()` in JavaScript è un metodo disponibile su tutti gli tipi di dati primitivi e sugli oggetti. Esso restituisce una rappresentazione di stringa dell'oggetto. Ecco come funziona:

- Numeri:

```javascript
let numero = 42;
let stringaNumero = numero.toString();

console.log(stringaNumero); // Stampa: "42"
```

- Booleani:

```javascript
let booleano = true;
let stringaBooleano = booleano.toString();

console.log(stringaBooleano); // Stampa: "true"
```

- Stringhe:

```javascript
let stringa = "Ciao";
let stringaRappresentazione = stringa.toString();

console.log(stringaRappresentazione); // Stampa: "Ciao"
```

- Utilizzo con Oggetti:

```javascript
let oggetto = { nome: "Alice", età: 25 };
let stringaOggetto = oggetto.toString();

console.log(stringaOggetto); // Dipende dall'implementazione, può restituire "[object Object]"
```

Per gli oggetti, il risultato del metodo `.toString()` può variare a seconda dell'implementazione. Per molti oggetti, è restituito `[object Object]`, ma è possibile sovrascrivere il metodo `.toString()` all'interno della definizione dell'oggetto per ottenere una rappresentazione più significativa.

```javascript
let persona = {
  nome: "Alice",
  età: 25,
  toString: function() {
    return this.nome + " ha " + this.età + " anni.";
  }
};

let rappresentazionePersona = persona.toString();

console.log(rappresentazionePersona); // Stampa: "Alice ha 25 anni."
```

In questo esempio, abbiamo sovrascritto il metodo `.toString()` nell'oggetto `persona` per fornire una rappresentazione personalizzata quando viene chiamato.

### String()
In JavaScript, `String()` è sia un costruttore che una funzione che può essere utilizzata per convertire un valore in una stringa. Ecco come funziona:

- Utilizzo come Costruttore:

```javascript
let numero = 42;
let stringaNumero = String(numero);

console.log(stringaNumero); // Stampa: "42"
```

In questo esempio, `String()` viene utilizzato come costruttore per creare un oggetto di tipo stringa a partire dal valore numerico `42`. Questo è equivalente a chiamare `new String(numero)`, ma l'uso del costruttore è meno comune rispetto all'utilizzo come funzione.

- Utilizzo come Funzione:

```javascript
let booleano = true;
let stringaBooleano = String(booleano);
let string = booleano != 

console.log(stringaBooleano); // Stampa: "true"
```

In questo esempio, `String()` viene utilizzato come una funzione per convertire il valore booleano `true` in una stringa.

- Conversione Implicita:

JavaScript esegue spesso la conversione implicita in stringa quando è necessario. Ad esempio, quando si utilizza l'operatore di concatenazione `+` con una stringa e un altro tipo di dato:

```javascript
let numero = 42;
let stringa = "Il numero è: " + numero;

console.log(stringa); // Stampa: "Il numero è: 42"
```

In questo caso, JavaScript converte automaticamente il numero in una stringa prima di concatenarlo alla stringa.

In generale, `String()` è utile quando si desidera esplicitamente convertire un valore in una stringa. Tuttavia, nelle situazioni comuni, JavaScript gestirà la conversione implicita in stringa quando necessario.

