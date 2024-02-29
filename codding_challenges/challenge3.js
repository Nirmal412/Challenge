
function housecount(house){
    if(house == 1){
        stick = house*6;
        return stick;
    }else stick = (house*6) - (house-1);
return stick;
}
console.log(housecount(4));

// 1 == 6
// 2 == 11
// 3 == 16
// 4 == 21