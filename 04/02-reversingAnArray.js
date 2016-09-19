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
