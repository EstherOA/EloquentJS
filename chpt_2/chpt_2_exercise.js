//exercise one: LOOPING A TRIANGLE
function loopTriangle(numIteration) {
    for (let i = 1; i <= numIteration; i++) {
        console.log("#".repeat(i))
    }
}

//exercise two: FIZZBUZZ
function fizzbuzz(numIteration) {
    for (let j = 1; j <= numIteration; j++) {
        if(j % 3 == 0) {console.log("Fizz");}
        else if(j % 5 == 0) {console.log("Buzz");}
        else {console.log(j);}
    }
}

//exercise three: CHESSBOARD
function chessboard(size) {
    let string = "\n"
    let isSpace = true;
    let isSpaceStart = true;
    let numArray = [...Array(size + 1).keys()].splice(1);
    
    numArray.map(a => {
      numArray.map(n => {
      if(isSpace) {
        string += "  "
      } else {
        string += "#" 
      }
        isSpace = !isSpace;    
      });
      string += "\n";
      isSpaceStart = !isSpaceStart;
      isSpace = isSpaceStart;
    });
    console.log(string)
}

module.exports={loopTriangle, fizzbuzz, chessboard};