# Classic For Loop
Normalmente si utilizza l'espressione 1 per inizializzare la variabile utilizzata nel ciclo (let i = 0).

Questo non è sempre il caso. A JavaScript non interessa. L'espressione 1 è opzionale.

È possibile inizializzare molti valori nell'espressione 1 (separati da una virgola):

```javascript
for (let i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}
```

È possibile omettere l'espressione 1 (come quando i valori sono impostati prima dell'avvio del ciclo):

```javascript
let i = 2;
let len = cars.length;
let text = "";
for (; i < len; i++) {
  text += cars[i] + "<br>";
}
```
------------------------------------------------------------------
Spesso l'espressione 3 incrementa il valore della variabile iniziale.

Non è sempre così. A JavaScript non interessa. L'espressione 3 è opzionale.

L'espressione 3 può fare qualsiasi cosa, come un incremento negativo (i--), un incremento positivo (i = i + 15) o qualsiasi altra cosa.

L'espressione 3 può anche essere omessa (come quando si incrementano i valori all'interno del ciclo):

```javascript
let i = 2;
let len = cars.length;
let text = "";
for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}
```

## The For In Loop
Il ciclo For In
L'istruzione JavaScript for in esegue il loop delle proprietà di un oggetto:

```javascript
for (key in object) {
  // code block to be executed
}
```

```javascript
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}


// Il ciclo for in itera su un oggetto persona
// Ogni iterazione restituisce una chiave (x)
// La chiave viene utilizzata per accedere al suo valore
// Il valore della chiave è person[x]
```

### For In Over Arrays
L'istruzione JavaScript for in può anche eseguire un ciclo sulle proprietà di una matrice:

```javascript
for (variable in array) {
  code
}
```

```javascript
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}
```

### Array.forEach()
Il metodo forEach() richiama una funzione (una funzione di callback) una volta per ogni elemento dell'array:

```javascript
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value;
}
```
## The For Of Loop
L'istruzione JavaScript for of esegue il loop dei valori di un oggetto iterabile.

Consente di eseguire il loop su strutture di dati iterabili come array, stringhe, mappe, elenchi di nodi e altro ancora:

```javascript
for (variable of iterable) {
  // code block to be executed
}
```

- variabile - Per ogni iterazione, il valore della proprietà successiva viene assegnato alla variabile. La variabile può essere dichiarata con const, let o var.

- iterabile - Un oggetto che ha proprietà iterabili.

### Loop over an Array

```javascript
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}
```

### Loop over an Array

```javascript
let language = "JavaScript";

let text = "";
for (let x of language) {
text += x;
}
```

## Conteggio di ciascun elemento in un array in JavaScript

https://bobbyhadz.com/blog/javascript-count-occurrences-of-each-element-in-array

1. Per contare il numero di ciascun elemento di una matrice:

2. Dichiarare una variabile che memorizzi un oggetto vuoto.

3. Utilizzare il ciclo for...of per iterare sull'array.

4. A ogni iterazione, incrementare il conteggio per l'elemento corrente, se esiste, oppure inizializzare il conteggio a 1.

```javascript
// ✅ Conteggio delle occorrenze di ciascun elemento in un array in JavaScript
const arr = ['a', 'b', 'a', 'a', 'c', 'c'];

const count = {};

for (const element of arr) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

console.log(count); // 👉️ {a: 3, b: 1, c: 2}

console.log(count.a); // 👉️ 3
console.log(count.b); // 👉️ 1
```

Lo stesso approccio può essere utilizzato se è necessario contare solo un elemento specifico nell'array.

```javascript
// ✅ Conteggio delle occorrenze un elemento specifico in un array in JavaScript
const arr = ['a', 'b', 'a', 'a'];

let count = 0;

for (const element of arr) {
  if (element === 'a') {
    count += 1;
  }
}

console.log(count); // 👉️ 3
```

Abbiamo dichiarato una nuova variabile e l'abbiamo impostata su un oggetto vuoto.

Il ciclo for...of ci consente di iterare sull'array.

La condizione if verifica se l'elemento corrente dell'array è presente come chiave nell'oggetto.
Se l'elemento è presente nell'oggetto, incrementiamo il valore corrispondente; altrimenti, inizializziamo la chiave a 1.

Le chiavi dell'oggetto sono gli elementi dell'array e i valori sono le occorrenze di ciascun elemento nell'array.

Questo approccio funziona anche se l'array è composto da numeri.

```javascript
const arr = [1, 1, 1, 2, 3, 3];

const count = {};

for (const element of arr) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

console.log(count); // 👉️ {1: 3, 2: 1, 3: 2}
```

Questo sembra un po' confusionario, dato che le chiavi degli oggetti possono essere solo di tipo stringa o simbolo in JavaScript.

Tuttavia, è possibile accedere alle chiavi dell'oggetto in entrambi i modi.

```javascript
console.log(count[1]); // 👉️ 3
console.log(count['1']); // 👉️ 3
```

## Conta le occorrenze di ogni elemento in una matrice usando reduce()

Si tratta di un processo in tre fasi:

1. Utilizzare il metodo Array.reduce() per iterare sull'array.
2. Inizializzare la variabile accumulatore a un oggetto.
3. Incrementare di 1 il valore dell'elemento corrente dell'array o inizializzarlo a 1.

```javascript
const arr = ['b', 'a', 'c', 'b', 'b', 'a'];

const count = arr.reduce((accumulator, value) => {
  accumulator[value] = ++accumulator[value] || 1;

  return accumulator;
}, {});

console.log(count); // 👉️ { b: 3, a: 2, c: 1 }

console.log(count.a); // 👉️ 2
console.log(count.b); // 👉️ 3
console.log(count.c); // 👉️ 1
```

