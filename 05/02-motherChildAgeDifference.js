const ancestry = JSON.parse(require('./ancestry'));

let byName = {};
ancestry.forEach(p => byName[p.name] = p);

const average = arr => arr.reduce((a, b) => a + b) / arr.length;

const averageDiff = arr => 
  average(
    arr
      .filter(p => byName[p.mother])
      .map(p => p.born - byName[p.mother].born)
  );

console.log(averageDiff(ancestry));

