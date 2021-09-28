 //exercise one: LOOPING A TRIANGLE
// for (let i = 1; i <= 7; i++) {
//   console.log("#".repeat(i))
// }

// exercise two: FIZZBUZZ
// for (let j = 1; j <= 100; j++) {
//   if(j % 3 == 0) {console.log("Fizz");}
//   else if(j % 5 == 0) {console.log("Buzz");}
//   else {console.log(j);}
// }

// exercise three: CHESSBOARD
// let string = "\n"
// let isSpace = true;
// let isSpaceStart = true;
// let size = 6
// let numArray = [...Array(size + 1).keys()].splice(1);

// numArray.map(a => {
//   numArray.map(n => {
//   if(isSpace) {
//     string += "  "
//   } else {
//     string += "#" 
//   }
//     isSpace = !isSpace;    
//   });
//   string += "\n";
//   isSpaceStart = !isSpaceStart;
//   isSpace = isSpaceStart;
// });
// console.log(string)


//exercise four: MINIMUM
// function min(a, b) {
//   return a < b ? a : b
// }

// min(3, 5)
// min(8, 2)

//exercise five: RECURSION
// function isEven(a) {
//   let num = Math.abs(a);
//   if(num == 0) return true;
//   else if (num == 1) return false;
//   else return isEven(num - 2)
// }

// console.log(isEven(-2))

//exercise six: BEAN COUNTING
// function countBs(sampleString) {
//   return countChar(sampleString, "B")
// }

// function countChar(string, char) {
//   return [...string].filter(c => c === char).length
// }

// console.log(countBs("BellosBslaBoajdbo"))
// console.log(countChar("Hello World", 'o'))

//exercise seven: THE SUM OF A RANGE
// function range(start, stop, step=1) {
//   let generated = [];
  
//   if (step >= 0) {
//     for(let i = start; i <= stop; i += step) {
//       generated.push(i);
//     }
//   } else {
//     for(let i = start; i >= stop; i += step) {
//       generated.push(i);
//     }
//   }
//   return generated;
// }

// function sum(arr) {
//   return arr.reduce((acc, init) => acc + init, 0)
// }

// console.log(range(8, 2, -2))
// console.log(range(2, 10, 2))

// console.log(sum(range(1,10)))

//exercise eight: REVERSING AN ARRAY
// const reverseArray = (arr) => {
//   let newArray = [];
//   for(let i = arr.length-1; i >= 0; --i) { //research postfix and prefix operators in loops
//     newArray.push(arr[i]);
//   }
//   return newArray;
// }

// console.log(reverseArray([1, 2, 3, 4, 5]))

// const reverseArrayInPlace = (arr) => {
//   for(let i = 0; i < arr.length/2; i++) {
//     let tempElem = arr[i]
//     let corrIndex = arr.length - (i + 1)
//     arr[i] = arr[corrIndex];
//     arr[corrIndex] = tempElem;
//   }
//   return arr;
// }

// console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6]))

//exercise nine: A LIST
// const arrayToList = (arr) => {
//   let list = {
//     value: arr[0],
//     rest: null
//   };
  
//   for(let i = 1; i < arr.length; i++) {
//     addToList(list, arr[i])
//   }
//   console.log(list);
// }

// const addToList = (list, value) => {
//   if(list.rest == null) {
//     list.rest = {value, rest: null}
//     return list
//   }
//   return addToList(list.rest, value)
// } 

// arrayToList([1, 2 , 3, 4, 5])

//exercise ten: DEEP COMPARISON
// const deepEqual = (valOne, valTwo) => {
//   if(typeof valOne == 'object' || typeof valTwo == 'object') {
//     let isEqual = Object.keys(valOne).length == Object.keys(valTwo).length;
//     for(let k of Object.keys(valOne)) {
//       if(valOne[k] !== valTwo[k]) isEqual = false
//     }
//     return isEqual
//   }
//   else return valOne === valTwo
// }

// deepEqual({name: 'Hello', age: 3}, {name: 'Hello', age: 3})

//exercise eleven: FLATTENING
// const flatten = (arr) => arr.reduce((flatArr, currArr) => flatArr.concat(currArr), []);

// flatten([[1, 2], [3, 4], [5, 6], [2, 5, 6]])

//exercise twelve: YOUR OWN LOOP
// const loop = (val, testFunc, updateFunc, bodyFunc) => {
//   let currVal = val;
//   while(testFunc(currVal)) {
//     bodyFunc(currVal);
//     currVal = updateFunc(currVal);
//   }
// }

// loop(0, a => a < 5, a => a += 1, a => console.log(a));

//exercise thirteen: EVERYTHING
// const everyWithLoop = (arr, predicateFunc) => {
//   return !arr.map(a => predicateFunc(a)).includes(false)
// }

// const everyWithSome = (arr, predicateFunc) => arr.some(predicateFunc)

// console.log(everyWithSome([1, 2, 3, 4, 5], x => x > 2))
// console.log(everyWithLoop([1, 2, 3, 4, 5], x => x < 6))

//exercise fourteen
// class Vec {
  
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
  
//   plus(otherVec) {
//     return new Vec(this.x + otherVec.x, this.y + otherVec.y);
//   }
  
//   minus(otherVec) {
//     return new Vec(this.x - otherVec.x, this.y - otherVec.y);
//   }
  
//   get length() {
//     return Math.sqrt(this.y * this.y + this.x * this.x)
//   }
// }

// const vectorOne = new Vec(2, 3);
// console.log(vectorOne.length)

// const vectorTwo = new Vec(3, 4);
// console.log(vectorTwo.length)

// const plusVec = vectorOne.plus(vectorTwo);
// console.log(plusVec.length);

// const minusVec = vectorTwo.minus(vectorOne);
// console.log(minusVec.length)

//exercise fifteen
// class Group {
//   constructor() {
//     this.elements = [];
//   }
  
//   add(elem) {
//     if(!this.elements.includes(elem)) this.elements.push(elem)
//   }
  
//   delete(elem) {
//     let elemIndex = this.elements.indexOf(elem);
//     if(elemIndex !== -1) {
//       this.elements = this.elements.slice(0, elemIndex).concat(this.elements.slice(elemIndex+1, this.elements.legth))
//     }
//   }
  
//   has(elem) {
//     return this.elements.includes(elem);
//   }
  
//   toString() {
//     return this.elements.toString();
//   }
  
//   static from(obj) {
//     let newGroup = new Group();
//     for(let e of obj) {
//       newGroup.add(e);
//     }
//     return newGroup
//   }
// }

// const sampleGroup = new Group();
// sampleGroup.add(1);
// sampleGroup.add(2);
// sampleGroup.add(1);
// sampleGroup.add(5);
// sampleGroup.toString();

// sampleGroup.delete(1)
// sampleGroup.toString()
// sampleGroup.add(6)
// sampleGroup.toString()

// sampleGroup.has(1)
// sampleGroup.has(5)
// sampleGroup.has(2)

// console.log("new group:", Group.from([1, 3, 4]).toString())

// // exercise sixteen
// class GroupIterator {
//   constructor(group) {
//     this.index = 0;
//     this.group = group;
//   }
  
//   next() {
//     if(this.index == this.group.elements.length) {
//       return {done: true};
//     }
//     const result = {value: this.group.elements[this.index], done: false}
//     this.index ++;
//     return result;
//   }
// }

// Group.prototype[Symbol.iterator] = function() {return new GroupIterator(this)};

// for(let value of Group.from([1, 3, 4, 5])) {
//   console.log(`Current group elem: ${value}`)
// }

// exercise seventeen: BORROWING A METHOD
// let sampleObj = {name: "Jon", age: 34, hasOwnProperty: "totally"};

// console.log(Object.hasOwnProperty.call(sampleObj, "age"))