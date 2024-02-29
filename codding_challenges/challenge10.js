// Given a string, find the length of the longest substring without repeating characters. For example, if the input is "abcabcbb", the output should be 3 (which is "abc").

const a = "abbcd";
let b = a.split("");
console.log(b);
for(let i=0; i<b.length; i++){
    if(b[i] == b[i+1]){
      break;
    };
};
console.log(b);
// let set = new Set(b)
// let arr = [];
// set.forEach(i => arr.push(i));
// console.log(arr);
// console.log(arr.length);



// const a = "adbabck";
// let b = a.split("");
// console.log(b);
// let set = new Set(b)
// let arr = [];
// set.forEach(i => arr.push(i));
// console.log(arr);
// console.log(arr.length);