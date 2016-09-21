/*
Arrays also come with the standard methods every and some . Both take a
predicate function that, when called with an array element as argument, re-
turns true or false. Just like && returns a true value only when the expressions
on both sides are true, every returns true only when the predicate returns
true for all elements of the array. Similarly, some returns true as soon as the
predicate returns true for any of the elements. They do not process more el-
ements than necessary—for example, if some finds that the predicate holds
for the first element of the array, it will not look at the values after that.
Write two functions, every and some , that behave like these methods,
except that they take the array as their first argument rather than being a
method.
*/
const some = (arr, fn) => {
  for (let i in arr)
    if (fn(arr[i])) return true;
  return false;
};

const every = (arr, fn) => {
  for (let i in arr)
    if (!fn(arr[i])) return false;
  return true;
};

console.log(some([1, 2, 3, 4], val => val < 3));
console.log(some([4, 5, 6, 7], val => val < 3));
console.log(every([1, 2, 3, 4], val => val < 10));
console.log(every([10, 11, 12, 13], val => val < 10));
