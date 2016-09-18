function reverseArray(arr) {
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

console.log(reverseArray([1, 2, 3, 4, 5]));
var myarr = [1, 2, 3, 4, 5];
reverseArrayInPlace(myarr);
console.log(myarr);
