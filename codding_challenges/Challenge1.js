/*Write a function that takes an array and chunk size as input and splits the array into smaller arrays 
 of the specified size. For example, chunk([1, 2, 3, 4, 5], 2) should return [[1, 2], [3, 4], [5]].*/

var arr = [1,2,3,4,5];


function abc(arr, size){
    b=[];
    for(let i =0; i<arr.length; i+=size){
        b.push(arr.slice(i, i+size));
    }
    return b;
}
const arr = [1,2,3,4,5];
console.log(abc(arr, 2));