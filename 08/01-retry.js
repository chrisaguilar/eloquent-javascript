function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.001)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  try {
    return primitiveMultiply(a, b);
  } catch(e) {
    if (e instanceof MultiplicatorUnitFailure)
      return reliableMultiply(a, b);
  }
}

console.log(reliableMultiply(0, 1));
console.log(reliableMultiply(1, 2));
console.log(reliableMultiply(2, 3));
console.log(reliableMultiply(3, 4));
console.log(reliableMultiply(4, 5));
console.log(reliableMultiply(5, 6));
console.log(reliableMultiply(6, 7));
console.log(reliableMultiply(7, 8));
console.log(reliableMultiply(8, 9));
console.log(reliableMultiply(9, 10));
console.log(reliableMultiply(10, 10));