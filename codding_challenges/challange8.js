const data1 = [
    {
        id: 1,
        name: "milan",
        children: [
            {
                id: 3,
                name: "sachin",
                children: [
                    {
                        id: 5,
                        name: "dixit",
                        children: [
                            {
                                id: 10,
                                name: "hello"
                            }
                        ]
                    },

                    {
                        id: 11,
                        name: "rushil",
                        children: [
                            {
                                id: 13,
                                name: "yash"
                            }
                        ]
                    },
                ],
            },
        ]
    },


    {
        id: 2,
        name: "virat",
        children: [
            {
                id: 4,
                name: "yuvraj",
                children: [
                    {
                        id: 6,
                        name: "ishan",
                        children: [
                            {
                                id: 8,
                                name: "hello"
                            }
                        ]
                    },

                    {
                        id: 12,
                        name: "rahul",
                        children: [
                            {
                                id: 14,
                                name: "kishan"
                            }
                        ]
                    },
                ],
            },
        ]
    }
]
// for(let i=0; i<data1.length; i++){
// // let a = data1[i];
// // console.log(a);

// }



// let a = data1[0].name;
// let b = data1[0].children[0].name;
// let c = data1[0].children[0].children[0].name;
// let d = data1[0].children[0].children[0].children[0].name;
// let e = data1[0].children[0].children[1].name;
// let f = data1[0].children[0].children[1].children[0].name;
// console.log(a);
// console.log('--',b);
// console.log('-----',c);
// console.log('--------',d);
// console.log('-----------',e);
// console.log('-----------',f);


// const abc = function(element){
//      element.forEach(elem => {
//         console.log(elem.name);

//         if(typeof elem.children === 'object'){
            
//             abc(elem.children);
//         };
//      });
// };
// let nirmal = abc(data1);
// console.log(nirmal);


function printNamesWithSpaces(data, depth = 0) {
    data.forEach(item => {
        console.log(" ".repeat(depth * 4) + item.name);
        if (item.children) {
            printNamesWithSpaces(item.children, depth + 1);
        }
    });
}
printNamesWithSpaces(data1);