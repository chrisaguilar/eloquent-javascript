/*
Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the input
arrays.
*/

const flatten = arr => arr.some(val => Array.isArray(val))
  ? flatten(arr.reduce((a, b) => a.concat(b), [])) : arr

let arr = [[[[[[[[[[[1, [[[2]]], [[3, [[[[4]]]]]], [[5, [[[6], 7], 8], 9], 10], 11]]]]]]]]]]]

console.time('Flatten')
console.log(flatten(arr))
console.timeEnd('Flatten')

arr = ['Hello', ['World'], [['this']], [[['is']]], [[[['my']]]], [[[[['test']]]]], [[[[[['I\'m']]]]]], [[[[[[['trying']]]]]]], [[[[[[[['to']]]]]]]], [[[[[[[[['see']]]]]]]]], [[[[[[[[[['how']]]]]]]]]], [[[[[[[[[[['long']]]]]]]]]]], [[[[[[[[[[[['this']]]]]]]]]]]], [[[[[[[[[[[[['takes']]]]]]]]]]]]]]

console.time('Flatten')
console.log(flatten(arr))
console.timeEnd('Flatten')
