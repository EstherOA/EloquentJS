const codeGolf = (text, regexNum) => {
    let results = false;

    //string one - cat, car
    const carRegex = /ca(r|t)/;
 
    //string two - pop, prop
    const popRegex = /p(r)?op/;

    //string three - ferret, ferry, ferrari
    const ferretRegex = /ferr(et|y|ari)/;

    //string four - any word ending in ious
    const iousRegex = /.+ious$/;

    //string five - a whitespace character followed by a period, comma, colon, or semicolon
    const punctRegex = /\s(\.|;|:|,)/;

    //string six - any word longer than six letters
    const sixLengthRegex = /\b\w{7,}\b/g;

    //string seven - any word without the letter e (or E)
    const withoutERegex = /\b[^e]+\b/gi;

    switch(regexNum) {
        case 1: results = carRegex.test(text);
        break;
        case 2: results = popRegex.test(text);
        break;
        case 3: results = ferretRegex.test(text);
        break;
        case 4: results = iousRegex.test(text);
        break;
        case 5: results = punctRegex.test(text);
        break;
        case 6: results = sixLengthRegex.test(text);
        break;
        case 7: results = withoutERegex.test(text);
        break;
        default: results = false;
    }
    return results;
}

console.log("text contains car or cat:", codeGolf("capcar", 1));
console.log("text contains pop or prop:", codeGolf("prop", 2));
console.log("text contains ferret, ferry, ferrari:", codeGolf("ferryari", 3));
console.log("text ends in ious:", codeGolf("ious", 4));
console.log("text is a whitespace character followed by a period, comma, colon, or semicolon:", codeGolf(" :", 5));
console.log("text is longer than 6 letters:", codeGolf("aweqefa", 6));
console.log("word(s) do not contain e or E:", codeGolf("saesdf", 7));


/**
 * 
 * @param {string} text 
 * @returns a string with all " ' " single quotes replaced with double " " "
 */
const quotingStyle = (text) => {
    const quoteRegex = /^'|(\W)'|'(\W)|'$/g;
    return text.replace(quoteRegex, "$1\"$2");
}

console.log(quotingStyle("'quoted text is 'quote's line this' and this'"))

/* * 
 * regex to match all JavaScript-style numbers
 * 
 * It must support an optional minus
 * or plus sign in front of the number, 
 * the decimal dot, and exponent notation—5e-3 or 1E10—
 * */

/**
 * 
 * @param {string} text 
 * @returns true | false if the string is a valid JS-Style number
 */
const numbersAgain = (text) => {
    const numRegex = /^(-|\+)?(\d+(\.|E|e\+?|e-)?|\.?\d+)+$/;
    return numRegex.test(text);
}

console.log("the text is a number:", numbersAgain("5E13"))