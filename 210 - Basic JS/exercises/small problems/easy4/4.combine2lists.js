
// Combine Two Lists
// Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

// You may assume that both input arrays are non-empty, and that they have the same number of elements.

// Example:

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

function interleave(arr1, arr2) {
  var i;
  var result = [];

  for (i = 0; i < arr1.length; i += 1) {
    result.push(arr1[i], arr2[i]);  // push can take more than one argument!
  }

  return result;
}