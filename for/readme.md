## Conteggio delle occorrenze di ciascun elemento in un array in JavaScript

1. Per contare le occorrenze di ciascun elemento di una matrice:

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

Lo stesso approccio può essere utilizzato se è necessario contare solo le occorrenze di un elemento specifico nell'array.

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

