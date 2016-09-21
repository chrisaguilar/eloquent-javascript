/*
Arrays have a method reverse , which changes the array by inverting the
order in which its elements appear. For this exercise, write two functions,
reverseArray and reverseArrayInPlace . The first, reverseArray , takes an array
as an argument and produces a new array that has the same elements in
the inverse order. The second, reverseArrayInPlace , does what the reverse
method does: it modifies the array given as argument in order to reverse
its elements. Neither may use the standard reverse method.
Thinking back to the notes about side effects and pure functions in the
previous chapter, which variant do you expect to be useful in more situa-
tions? Which one is more efficient?
*/

/*function reverseArray(arr) {
  var final = [];
  for (var i = arr.length-1; i >= 0; i--)
    final.push(arr[i]);
  return final;
}

function reverseArrayInPlace(arr) {
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    var old = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = old;
  }
  return arr;
}
*/

const reverseArray = arr => {
  let final = [];
  for (let i = arr.length - 1; i >= 0; i--)
    final.push(arr[i]);
  return final;
};

const reverseArrayInPlace = arr => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const old = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = old;
  }
};

console.log(reverseArray([1, 2, 3, 4, 5]));
let myarr = [1, 2, 3, 4, 5];
reverseArrayInPlace(myarr);
console.log(myarr);
