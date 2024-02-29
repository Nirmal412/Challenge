/*  Create a function that takes a string and returns the number (count) of vowels contained within it.
Examples
countVowels("Celebration") - 5
countVowels("Palm") - 1
countVowels("Prediction")-4
Notes
a, e, i, o, u are considered vowles (not y).
• All test cases are one word and only contain letters   */

function vowels(str){
    var countVowels = 0;
    for(alphabet of str){
        if(alphabet == 'a' || alphabet == 'e' || alphabet == 'i' || alphabet == 'o' || alphabet == 'u'){
            countVowels += 1 ;
        }
    };
    return countVowels;
};
console.log(vowels("celebration"));