function multiply(number) {
    let abs = Math.abs(number); // numero in val assoluto
    let power = String(abs); // numero in string
    let powerLength = power.length; // numero delle caselle della stringa
    let Powerfive = Math.pow(5, powerLength); // potenza di 5 con il numero delle caselle dell input
    console.log(Powerfive);
    console.log(number);
    console.log(number*Powerfive); //moltiplica
  }

<<<<<<< HEAD
multiply(10);
=======
// const arr = ['b', 'a', 'c', 'b', 'b', 'a'];

// const count = arr.reduce((accumulator, value) => {
//   accumulator[value] = ++accumulator[value] || 1;

//   return accumulator;
// }, {});

let count = 15;
while (count > 0) {
    console.log(count);
    count-=1;
}
>>>>>>> refs/remotes/origin/main
