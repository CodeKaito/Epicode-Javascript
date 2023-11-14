//TODO Complete the square sum function so that it squares each number passed into it and then sums the results together.
//? For example, for [1, 2, 2] it should return 9 because 

function squareSum(numbers) {
    let result = 0; // Initialize result as a number
    for (let i = 0; i < numbers.length; i++) { // Use numbers.length instead of just numbers
      result += Math.pow(numbers[i], 2); // Square each number and add to result
    }
    console.log(result);
    return result;
  }

squareSum([1, 2, 2]);
