// TODO The const keyword was introduced in ES6 (2015)
//? Variables defined with const cannot be Redeclared
//? Variables defined with const cannot be Reassigned
//? Variables defined with const have Block Scope

//* Cannot be Reassigned
//* A const variable cannot be reassigned:
// const PI = 3.141592653589793;
// PI = 3.14;      // This will give an error
// PI = PI + 10;   // This will also give an error

//! Must be Assigned
//* JavaScript const variables must be assigned a value when they are declared:
// const PI = 3.14159265359;

// const PI;
// PI = 3.14159265359; // Incorrect assignment

//! When to use JavaScript const?
//* Always declare a variable with const when you know that the value should not be changed.

//* Use const when you declare:
//? A new Array
//? A new Object
//? A new Function
//? A new RegExp

// TODO Constant Arrays
// You can create a constant array:
// const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
// cars[0] = "Toyota";

// You can add an element:
// cars.push("Audi");

//! YOU CANNOT REASSIGN THE ARRAY
// const cars = ["Saab", "Volvo", "BMW"];

// cars = ["Toyota", "Volvo", "Audi"];    // ERROR

// TODO Constant Objects
// You can create a const object:
// const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
// car.color = "red";

// You can add a property:
// car.owner = "Johnson";
//---------------------------------------------------------------
// const car = {type:"Fiat", model:"500", color:"white"};

// car = {type:"Volvo", model:"EX60", color:"red"}; //! ERROR

