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
