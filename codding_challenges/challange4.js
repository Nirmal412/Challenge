/*  Write a function that returns the number of times you must carry a digit when you sum together two integers.
Examples
CarryDigits (36,135) - 1
// You carry the 1 when you sum 6 and 5 together.
carryDigits (671, 329) - 3
carryDigits (1111, 3333) - 0
carryDigits (53214, 56905) - 3 */

function carryDigits(num1, num2) {
    let carryCount = 0;
    let carry = 0;

    while (num1 > 0 || num2 > 0) {
        const digit1 = num1 % 10;
        const digit2 = num2 % 10;

        const total = digit1 + digit2 + carry;

        if (total >= 10) {
            carry = 1;
            carryCount++;
        } else {
            carry = 0;
        }

        num1 = Math.floor(num1 / 10);
        num2 = Math.floor(num2 / 10);
    }
    return carryCount;
}
console.log(carryDigits(36, 135));