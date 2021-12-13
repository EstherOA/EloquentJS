//exercise four: MINIMUM
function min(a, b) {
  return a < b ? a : b
}

min(3, 5)
min(8, 2)

//exercise five: RECURSION
function isEven(a) {
  let num = Math.abs(a);
  if(num == 0) return true;
  else if (num == 1) return false;
  else return isEven(num - 2)
}

console.log(isEven(-2))

//exercise six: BEAN COUNTING
function countBs(sampleString) {
  return countChar(sampleString, "B")
}

function countChar(string, char) {
  return [...string].filter(c => c === char).length
}

console.log(countBs("BellosBslaBoajdbo"))
console.log(countChar("Hello World", 'o'))
