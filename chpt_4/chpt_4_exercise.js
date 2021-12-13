
// exercise seven: THE SUM OF A RANGE
function range(start, stop, step=1) {
  let generated = [];
  
  if (step >= 0) {
    for(let i = start; i <= stop; i += step) {
      generated.push(i);
    }
  } else {
    for(let i = start; i >= stop; i += step) {
      generated.push(i);
    }
  }
  return generated;
}

function sum(arr) {
  return arr.reduce((acc, init) => acc + init, 0)
}

console.log(range(8, 2, -2))
console.log(range(2, 10, 2))

console.log(sum(range(1,10)))

// exercise eight: REVERSING AN ARRAY
const reverseArray = (arr) => {
  let newArray = [];
  for(let i = arr.length-1; i >= 0; --i) { //research postfix and prefix operators in loops
    newArray.push(arr[i]);
  }
  return newArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]))

const reverseArrayInPlace = (arr) => {
  for(let i = 0; i < arr.length/2; i++) {
    let tempElem = arr[i]
    let corrIndex = arr.length - (i + 1)
    arr[i] = arr[corrIndex];
    arr[corrIndex] = tempElem;
  }
  return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6]))

// exercise nine: A LIST
const arrayToList = (arr) => {
  let list = {
    value: arr[0],
    rest: null
  };
  
  for(let i = 1; i < arr.length; i++) {
    addToList(list, arr[i])
  }
  console.log(list);
}

const addToList = (list, value) => {
  if(list.rest == null) {
    list.rest = {value, rest: null}
    return list
  }
  return addToList(list.rest, value)
} 

arrayToList([1, 2 , 3, 4, 5])

// exercise ten: DEEP COMPARISON
const deepEqual = (valOne, valTwo) => {
  if(typeof valOne == 'object' || typeof valTwo == 'object') {
    let isEqual = Object.keys(valOne).length == Object.keys(valTwo).length;
    for(let k of Object.keys(valOne)) {
      if(valOne[k] !== valTwo[k]) isEqual = false
    }
    return isEqual
  }
  else return valOne === valTwo
}

deepEqual({name: 'Hello', age: 3}, {name: 'Hello', age: 3})

