import SCRIPTS from './scripts';

let testString = "Helloaksdfjakajفي الكرامة والحقوق. وقد وهبوا عقلا";
let charDirections = [];
// console.log(SCRIPTS);

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


