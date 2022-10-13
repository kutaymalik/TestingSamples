/*  1. Import the function to test
    2. Give an input to the function
    3. Define what to expect as the output
    4. Check if the function produces the expected output
*/

const sumInt = (a,b) => {
    return a+b;
}

function subInt(a,b) {
    return Math.abs(a-b);
}

module.exports = {
    sumInt, subInt
}