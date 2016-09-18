const ancestry = JSON.parse(require('./ancestry.js'));

/*
Array.prototype.forEach() was covered earlier in chapter, but I'm comfortable enough with that to not bother trying to interpret it.
*/
/*
const filter = (array, test) => {
  let passed = [];
  for (let i = 0; i < array.length; i++) {
    if (test(array[i])) passed.push(array[i]);
  }
  return passed;
}

console.log("Young before 1924:");
console.log(filter(ancestry, person => person.born > 1900 && person.born < 1925));
console.log("\nFather was Carel Haverbeke:");
console.log(ancestry.filter(person => person.father == "Carel Haverbeke"));

const map = (array, transform) => {
  let mapped = [];
  for (let i = 0; i < array.length; i++) mapped.push(transform(array[i]));
  return mapped;
}

const overNinety = ancestry.filter(person => person.died - person.born > 90);

console.log("\nPeople who lived past 90:")
console.log(map(overNinety, person => person.name));

const reduce = (array, combine, start) => {
  let current = start;
  for (let i = 0; i < array.length; i++) current = combine(current, array[i]);
  return current;
}

console.log("\nReduce example:");
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

console.log("\nMost ancient known ancestor:");
console.log(ancestry.reduce((min, cur) => {
  if (cur.born < min.born) return cur;
  else return min;
}));


*/

const average = array => {
  const plus = (a, b) => a + b;
  return array.reduce(plus) / array.length;
};

const age = p => p.died - p.born;
const male = p => p.sex == 'm';
const female = p => p.sex == 'f';

console.log(average(ancestry.filter(male).map(age)));
console.log(average(ancestry.filter(female).map(age)));
