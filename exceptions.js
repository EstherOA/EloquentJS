function primitiveMultiply(numA, numB) {
    "use strict";
    const randomProbability = Math.random();
    if(randomProbability > 0.2) throw new MultiplicatorUnitFailure("Failing 80% of the time")
    else return numA * numB;
}

class MultiplicatorUnitFailure extends Error{};

function multiplyUntilSuccess() {
    let count = 0;
    for(;;) {
        try{
            const result = primitiveMultiply(2, 3);
            console.log("Result is:", result);
            console.log("Retried", count, "times")
            break;
        } catch(error) {
            count++;
            if(error instanceof MultiplicatorUnitFailure) console.log(error.message)
            else throw error;
        }
    }
}

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
        if(this.locked) throw new Error("Locked!");
        return this._content;
    }
}

function withBoxUnlocked(callback) {
    const initialState = box.locked;
    try{
        box.unlock();
        callback();
    } catch(err) {
        console.log(err);
    } finally {
        if(initialState) box.lock();
    }
}

multiplyUntilSuccess();
withBoxUnlocked(function() {box.content.push("New toy")});
console.log("Box locked:", box.locked);
withBoxUnlocked(function() {console.log("Content:", box.content)});
console.log("Box locked:", box.locked);
withBoxUnlocked(function() {throw new Error("Failing to manipulate box")});
console.log("Box locked:", box.locked);

