let display = document.getElementById('display');
let digits = document.getElementsByClassName('digit');
let operators = document.getElementsByClassName('operator');
let operator = null;
let firstVal = '';
let secondVal = '';
let finalResult = '';

for (const element of operators) {
    element.addEventListener("click", async(e) => {
        if(firstVal) {
            operator = e.target.value;
            display.textContent = firstVal + operator;
            console.log(operator);
        }
    });
}

for (const element of digits) {
    element.addEventListener("click", async(e) => {
        
        if (!operator) {
            if (display.textContent === "0") {
                display.textContent = e.target.value;
            } else {
                display.textContent += e.target.value;
            }
            firstVal += e.target.value;
            console.log("Sono il firstVal: " + firstVal);
        } else {
            display.textContent += e.target.value;
            secondVal += e.target.value;
            console.log("Sono il secondVal: " + secondVal);
        }
    });
}

let result = async() => {
    if(!firstVal || !secondVal || !operator) { // Casistica in cui uno dei 3 elementi fondamentali per il calcolo non sia definito!
        return; // Arresto subito la funzione!
    }
    console.log("sono il result");
    // Logica per eseguire l'operazione richiesta:
    switch (operator) {
        case "+":
            finalResult = +firstVal + +secondVal;
            break;
        case "-":
            finalResult = +firstVal - +secondVal;
            break;
        case "*":
            finalResult = +firstVal * +secondVal;
            break;
        case "/":
            finalResult = +firstVal / +secondVal;
            break;
    }
    display.textContent = finalResult;
    secondVal = "";
    operator = null;
    firstVal = finalResult;
}

let clear = () => {
    console.log("clear");
    display.textContent = "0";
    firstVal = '';
    secondVal = '';
    operator = null;
}


let clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', clear);