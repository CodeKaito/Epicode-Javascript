//todo Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
//? [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
    result = 1;
    for (i = 0; i<x.length; i++) {
      result*=x[i];
    }
    console.log(result);
    return result;
  }

grow([1, 2, 3]);

// function grow(x) {
//   const result = x.reduce((acc, currentValue) => acc * currentValue, 1);
//   console.log(result);
//   return result;
// }