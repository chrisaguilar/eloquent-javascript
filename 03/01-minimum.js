/*function minimum(first, second) {
  if (first > second) return second;
  else if (second > first) return first;
  else return false;
}
*/

const minimum = (first, second) => 
  (first > second) ? second 
  :(second > first ? first
  :'No Minimum');

console.log(minimum(1, 2));
console.log(minimum(3, 2));
console.log(minimum(4, 4));
