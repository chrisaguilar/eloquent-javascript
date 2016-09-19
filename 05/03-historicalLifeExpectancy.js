const ancestry = JSON.parse(require('./ancestry'));

const average = arr => arr.reduce((a, b) => a + b) / arr.length;

const groupBy = (arr, fn) => {
  let groups = {};
  arr.forEach(val => 
    fn(val) in groups ?
      groups[fn(val)].push(val)
      :groups[fn(val)] = [val]
  );
  return groups;
}

const centuries = groupBy(ancestry, person => Math.ceil(person.died / 100));

for(let century in centuries) {
  const ages = centuries[century].map(person => person.died - person.born);
  console.log(`${century}: ${average(ages)}`);
}
