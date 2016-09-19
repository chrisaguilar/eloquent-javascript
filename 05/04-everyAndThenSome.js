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
