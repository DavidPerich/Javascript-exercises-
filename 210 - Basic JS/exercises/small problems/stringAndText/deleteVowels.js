// Write a function that takes an array of strings, and returns an array of the same strings values without the vowels (a, e, i, o, u).

// Examples:

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

function removeVowels(array) {
  return array.map((string) => string.replace(/[aieou]/gi, ""));
}