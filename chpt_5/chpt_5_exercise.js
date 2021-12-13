import SCRIPTS from './scripts';

// exercise eleven: FLATTENING
const flatten = (arr) => arr.reduce((flatArr, currArr) => flatArr.concat(currArr), []);

flatten([[1, 2], [3, 4], [5, 6], [2, 5, 6]])

// exercise twelve: YOUR OWN LOOP
const loop = (val, testFunc, updateFunc, bodyFunc) => {
  let currVal = val;
  while(testFunc(currVal)) {
    bodyFunc(currVal);
    currVal = updateFunc(currVal);
  }
}

loop(0, a => a < 5, a => a += 1, a => console.log(a));

// exercise thirteen: EVERYTHING
const everyWithLoop = (arr, predicateFunc) => {
  return !arr.map(a => predicateFunc(a)).includes(false)
}

const everyWithSome = (arr, predicateFunc) => arr.some(predicateFunc)

console.log(everyWithSome([1, 2, 3, 4, 5], x => x > 2))
console.log(everyWithLoop([1, 2, 3, 4, 5], x => x < 6))

// exercise fourteen: Dominant Writing Direction
let testString = "Helloaksdfjakajفي الكرامة والحقوق. وقد وهبوا عقلا";
let charDirections = [];

const getCharScript = (string, pos) => {
    for(s of SCRIPTS) {
        if(s.ranges.some(([from, to]) => (string.codePointAt(pos) >= from && string.codePointAt(pos) <= to)))
        return s;
    }
    return null;
}

[...testString].map((c, i) => {
    let script = getCharScript(testString, i);
    if( script !== null) charDirections.push(script.direction)
});

let ltrCount = charDirections.filter(d => d === 'ltr').length;
let rtlCount = charDirections.filter(d => d === 'rtl').length;
let ttbCount = charDirections.filter(d => d === 'ttb').length;

const maxCount = Math.max(ltrCount, rtlCount, ttbCount);
if(maxCount == ltrCount) console.log("Maximum direction is ltr");
else if (maxCount == rtlCount) console.log("Maximum direction is rtl");
else console.log("Maximum direction count is ttb")


