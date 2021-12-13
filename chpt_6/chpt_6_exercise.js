// exercise fourteen
class Vec {
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  plus(otherVec) {
    return new Vec(this.x + otherVec.x, this.y + otherVec.y);
  }
  
  minus(otherVec) {
    return new Vec(this.x - otherVec.x, this.y - otherVec.y);
  }
  
  get length() {
    return Math.sqrt(this.y * this.y + this.x * this.x)
  }
}

const vectorOne = new Vec(2, 3);
console.log(vectorOne.length)

const vectorTwo = new Vec(3, 4);
console.log(vectorTwo.length)

const plusVec = vectorOne.plus(vectorTwo);
console.log(plusVec.length);

const minusVec = vectorTwo.minus(vectorOne);
console.log(minusVec.length)

// exercise fifteen
class Group {
  constructor() {
    this.elements = [];
  }
  
  add(elem) {
    if(!this.elements.includes(elem)) this.elements.push(elem)
  }
  
  delete(elem) {
    let elemIndex = this.elements.indexOf(elem);
    if(elemIndex !== -1) {
      this.elements = this.elements.slice(0, elemIndex).concat(this.elements.slice(elemIndex+1, this.elements.legth))
    }
  }
  
  has(elem) {
    return this.elements.includes(elem);
  }
  
  toString() {
    return this.elements.toString();
  }
  
  static from(obj) {
    let newGroup = new Group();
    for(let e of obj) {
      newGroup.add(e);
    }
    return newGroup
  }
}

const sampleGroup = new Group();
sampleGroup.add(1);
sampleGroup.add(2);
sampleGroup.add(1);
sampleGroup.add(5);
sampleGroup.toString();

sampleGroup.delete(1)
sampleGroup.toString()
sampleGroup.add(6)
sampleGroup.toString()

sampleGroup.has(1)
sampleGroup.has(5)
sampleGroup.has(2)

console.log("new group:", Group.from([1, 3, 4]).toString())

// exercise sixteen
class GroupIterator {
  constructor(group) {
    this.index = 0;
    this.group = group;
  }
  
  next() {
    if(this.index == this.group.elements.length) {
      return {done: true};
    }
    const result = {value: this.group.elements[this.index], done: false}
    this.index ++;
    return result;
  }
}

Group.prototype[Symbol.iterator] = function() {return new GroupIterator(this)};

for(let value of Group.from([1, 3, 4, 5])) {
  console.log(`Current group elem: ${value}`)
}

// exercise seventeen: BORROWING A METHOD
let sampleObj = {name: "Jon", age: 34, hasOwnProperty: "totally"};

console.log(Object.hasOwnProperty.call(sampleObj, "age"))