function multiply(number) {
    let abs = Math.abs(number); // numero in val assoluto
    let power = String(abs); // numero in string
    let powerLength = power.length; // numero delle caselle della stringa
    let Powerfive = Math.pow(5, powerLength); // potenza di 5 con il numero delle caselle dell input
    console.log(Powerfive);
    console.log(number);
    console.log(number*Powerfive); //moltiplica
  }

multiply(10);
