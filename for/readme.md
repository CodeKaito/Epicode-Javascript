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