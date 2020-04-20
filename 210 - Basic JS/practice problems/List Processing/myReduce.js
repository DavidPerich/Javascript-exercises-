// Write a function named myReduce that's similar to the Array.prototype.reduce method. It takes an array and a function as arguments, and optionally, a third argument that serves as an initial value. If the caller omits the initial value, myReduce should use the first element of the Array as the initial value. myReduce should return the value returned by the last invocation of the callback function.

function myReduce(array, func, initial) {
  var value = initial || array[0];
  var index;

  if (initial == array[0]) {
    index = 1;
  } else {
    index = 0;
  }

  array.slice(index).forEach(function (element) {
    value = func(value, element)
  });

  return value;
}

var smallest = function (result, value) {
  return result <= value ? result : value;
};

var sum = function (result, value) {
  return result + value;
};

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49