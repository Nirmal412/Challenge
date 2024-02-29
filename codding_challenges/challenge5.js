/*A number has a breakpoint
if it can be split in a way where the digits on the left side and the digits on the right side sum to the same number.
For instance, the number 35190 can be sliced between the digits 351and 90, since 3+5+19 and 909. On the other hand, the number 555 does not have a breakpoint(you must split between digits).
Create a function that returns true if a number has a breakpoint, and false otherwise.
Examples
breakPoint(159780) true
breakPoint(112) true
breakPoint(1034) true
breakPoint(10) false
breakPoint(343) false*/


function breakPoint(number) {
    const numberStr = number.toString();

    for (let i = 1; i < numberStr.length; i++) {

        const leftPart = numberStr.slice(0, i);
        const rightPart = numberStr.slice(i);

        const leftSum = leftPart.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        const rightSum = rightPart.split('').reduce((acc, digit) => acc + parseInt(digit), 0);

        if (leftSum === rightSum) {
            return true; 
        }
    }

    return false;
}

console.log(breakPoint(159780));