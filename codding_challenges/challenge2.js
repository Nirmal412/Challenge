/*  Write a function that returns the number of times you must carry a digit when you sum together two integers.

Examples

CarryDigits (36,135) - 1

// You carry the 1 when you sum 6 and 5 together.

carryDigits (671, 329) - 3

carryDigits (1111, 3333) - 0

carryDigits (53214, 56905) - 3  */

function abc(num1,num2){
    var count = 0;
    if(num1.length == num2.length){
        if(num1[-1] + num2[-1] >= 10){
           count += 1;
        }else if(num1[-2] + num2[-2] >= 10){
            count += 1;
        }else if(num1[-3] + num2[-3] >= 10){
            count += 1;
    }
  }
}