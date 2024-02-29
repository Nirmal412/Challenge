/*  Create a function that returns the total number of steps it takes to transform each element to the maximal element in the array. Each step consists of incrementing a digit by one.
Examples
incrementToTop( [3,4,5]) --> 3
// 3 increments: 3 ->4,4->5;4-> 5
incrementToTop( [4,3,4])-1
increment ToTop ([3,3,3]) --> 0
increment ToTop ([3,10,3]) --> 14
Notes
• If the array contains only the same digits, return e (see second example).
• Bonus: Can you write a solution that achieves this by only traversing the array once? (i.e. without finding the max before hand) */


let arr = [3,10,3];
let maxelement = arr[0];
for (let i=0 ; i<arr.length; i++){
    if(arr[i]>maxelement){
        maxelement = arr[i];
    };
};

let arr2 = 0;
for(let j=0; j<arr.length; j++){
    if(arr[j]<maxelement){
        const difference = maxelement -  arr[j];
        arr2 += difference;
    };
};
console.log(arr2);