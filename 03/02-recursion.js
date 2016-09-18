function isEven(number) {
  if (number < 0) return isEven(number + 2);
  else if (number == 0) return 'even';
  else if (number == 1) return 'odd';
  else return isEven(number - 2);
}

console.log(isEven(0));
console.log(isEven(1));
console.log(isEven(2));
console.log(isEven(3));
console.log(isEven(485));
console.log(isEven(5190));
console.log(isEven(-1));
console.log(isEven(-2));
console.log(isEven(-24));
console.log(isEven(-423));
