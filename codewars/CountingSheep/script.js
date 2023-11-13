//TODO Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
//* For example,
/*
* [true,  true,  true,  false,
* true,  true,  true,  true ,
* true,  false, true,  false,
* true,  false, false, true ,
* true,  true,  true,  true ,
* false, false, true,  true]
* The correct answer would be 17.

* Hint: Don't forget to check for bad values like null/undefined
*/

function countSheeps(sheep) {
    // Check if the input array is valid
    if (!sheep || !Array.isArray(sheep)) {
      console.error('Invalid input. Please provide a valid array.');
      return;
    }
  
    // Use the filter method to count the number of true values in the array
    const numberOfSheeps = sheep.filter(sheep => sheep === true).length;
  
    return numberOfSheeps;
  }
  
  // Example usage:
  const sheepArray = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, false, false, true, true];
  const result = countSheeps(sheepArray);
  console.log(result); // Output: 17

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}