function range(begin, end) {
  step = arguments[2] || 1;
  numbers = [];
  for (var i = begin; (step < 0 ? (i >= end) : (i <= end)); i+=step)
    numbers.push(i);
  return numbers;
}

function sum(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++)
    sum += numbers[i];
  return sum;
}

console.log(sum(range(1, 10)))
console.log(sum(range(10, 1, -1)));
console.log(sum(range(-10, -1)));
console.log(sum(range(-1, -10, -1)));
