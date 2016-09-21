/*
Using the example data set from this chapter, compute the average age
difference between mothers and children (the age of the mother when
the child is born). You can use the average function defined earlier in this
chapter.
Note that not all the mothers mentioned in the data are themselves
present in the array. The byName object, which makes it easy to find a person’s
object from their name, might be useful here.
*/

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

