/*
Objects, as generic blobs of values, can be used to build all sorts of data
structures. A common data structure is the list (not to be confused with the
array). A list is a nested set of objects, with the first object holding a refer-
ence to the second, the second to the third, and so on.
var list = {
  value: 1,
  rest: {
    value: 2,
    78
    rest: {
      value: 3,
      rest: null
    }
  }
};
A nice thing about lists is that they can share parts of their structure.
For example, if I create two new values {value: 0, rest: list} and {value:
-1, rest: list} (with list referring to the variable defined earlier), they are
both independent lists, but they share the structure that makes up their last
three elements. In addition, the original list is also still a valid three-element
list.
Write a function arrayToList that builds up a data structure like the
previous one when given [1, 2, 3] as an argument, and write a listToArray
function that produces an array from a list. Also write the helper functions
prepend , which takes an element and a list and creates a new list that adds
the element to the front of the input list, and nth , which takes a list and a
number and returns the element at the given position in the list, or undefined
when there is no such element.
If you haven’t already, also write a recursive version of nth .
*/

/*
function arrayToList(arr) {
  var list = null;
  for (var i = arr.length-1; i >= 0; i--)
    list = {
      value: arr[i],
      rest: list
    };
  return list;
}

function listToArray(list) {
  var arr = [];
  while (list != null) {
    arr.push(list.value);
    list = list.rest;
  }
  return arr;
}

function prepend(list, element) {
  list = {
    value: element,
    rest: list
  }
  return list;
}

function nth(list, number) {
  if (list == undefined) return undefined;
  else if (number == 0) return list.value;
  else return nth(list.rest, (number - 1));
}
*/

const arrayToList = arr => {
  let list = null;
  for (let i in arr)
    list = {
      value: arr[i],
      rest: list
    };
  return list;
};

const listToArray = list => {
  let arr = [];
  while (list != null) {
    arr.push(list.value);
    list = list.rest;
  }
  return arr;
};

const prepend = (list, element) => list = {value: element, rest: list};

const nth = (list, number) => 
  list == undefined ? undefined :(
    number == 0 ? list.value:
    nth(list.rest, (number-1))
  );


let myBigList = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: {
        value: 4,
        rest: {
          value: 5,
          rest: {
            value: 6,
            rest: {
              value: 7,
              rest: {
                value: 8,
                rest: {
                  value: 9,
                  rest: {
                    value: 10,
                    rest: null
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

console.log(listToArray(myBigList));
console.log(arrayToList(listToArray(myBigList)));
console.log(prepend(myBigList, 0));
console.log(prepend(myBigList, -1));
console.log(nth(myBigList, 4));
console.log(nth(myBigList, 8));
