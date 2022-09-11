// //var logger = require("logger").createLogger('development.log');

// const string = ['a', 'b', 'c', 'd'];

// console.log(string[2]);

// string.push('e');


// console.log(string );

// string.splice(2, 0, 'alian');

// console.log(string);


// console.log('loading an array', [] === []);
// console.log('loading an array', [1] === [1]);

// var object1 = {value : 10};
// var object2 = object1;
// var object3 = {value: 10};
// console.log(object1 === object2);
// console.log(object1 === object3);

// console.log(this); // {}
// function a() {
//     console.log(this); // refrenced to global object
// }

// //a();

// const object4 = {
//     a: function() {
//         console.log(this, "context is object4");
//     }
// }

// object4.a(); // return object4

// console.log(global === this) //false


// class Player {
//     constructor(name, type) {
//         console.log(this);
//         this.name = name;
//         this.type = type;
//     }
//     introduce() {
//         console.log(`hi i am a ${this.name}, I am a ${this.type}`);
//     }
// }

// class Wizard extends Player {
//     constructor(name, type, title) {
//         super(name, type);
//         this.title = title;
//     }
//     getTitle() {
//         console.log(`i have a Title of ${this.title}`);
        
//         //console.log('wizad class', this);
//     }
// }

// const p1 = new Wizard('Ashish', 'wizard', 'senior');
// p1.introduce();
// p1.getTitle()

// Joining Characters in an array

function solve(arr, joinargs) {
    let str = "";
    for(let i = 0; i < arr.length; i++) {
        if(i === arr.length - 1) {
          //  console.log(i)
            str += arr[i] + "";
        } else {
            str += arr[i] + joinargs;
        }
    }
    //console.log(arr.join(joinargs));
    console.log(str);
    return str;
}

console.log("<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>");
solve(["HI", "There", "How", "Are", "You"], "_") // HI_THERE_HOW_ARE_YOU;
//solve(["a", "a", "a", "a", "a"], "b");


// calculate repeated count of 1.

const intArray = [
    [1,4,2,1], [6 ,3,8,9], [1,5,1,0]
];


let count = 0;
intArray.flat().filter((item) => {
    if(item === 1) {
        count++
    }
});


//console.log(co);
//console.log("count of one is " , count)

//splitting Strings

function splitString(strArg, k) {
   //let str = strArg.split("");
   let str1 = "";
   let count = 0;
   const arr = [];
   for (let i = 0; i < strArg.length; i++) {
        count++;
        str1 += strArg[i];
       if (count % k === 0 ) {
            arr.push(str1);
            count = 0;
            str1 = "";
       } else if(i === strArg.length - 1) { // it will push the rest string
           arr.push(str1);
       }
   }
   return arr;
}

// const splitString = (strArg, k) => {
//     let chunks = [];
//     let strArr = strArg.split("");
//     for (let i = 0; i < strArr.length; i += k) {
//       chunks.push(strArr.slice(i, i + k).join(""));
//     }
//     return chunks;
//   };

console.log(splitString("aaabbbcccddd", 3));
console.log("<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log(splitString("abcdefgh", 5));

console.log("<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>");


// Duplicating String

function duplicatingString(strArg, k) {
    const arr = [];
    for(let i = 0; i < k; i++) {
        arr.push(strArg);
    }
    return arr;
}

console.log(duplicatingString('HI!', 10));

console.log("<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>");


//Remove letter from spacial character

function removeLetterFromCharacter(strArg) {
    let str = strArg.split("");
    let char;
    for(let i = 0; i < str.length; i++) {
        const code = strArg.charCodeAt(str[i]);
        console.log(code);
         char = String.fromCharCode(code);
        let str1 = "";
        //console.log(str[i].charCodeAt(0) <= 126)
       // console.log(str[i]);
    //    console.log(
    //    );
    //    if(str[i].charCodeAt(0) >= 32 && str[i].charCodeAt(0) <= 74 &&) {
    //         str1 += str[i];
    //         console.log(str[i]);
    //    }
        // if(str[i] !== ")" && str[i] !== "(") {
        //     str1 += str[i]
        // }
    }
    return char;
}

console.log(removeLetterFromCharacter("(a)(b)((c))(((d)))"));
console.log("<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log(removeLetterFromCharacter("((ab)(cd)()()df)"));
console.log("<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log(removeLetterFromCharacter("abcd"));



function compareTriplates(a, b) {
    let acount = 0;
    let bcount = 0;
    const arr = [];
    for (let i = 0; i < 3; i++) {
        if(a[i] > b[i]) {
            acount++;
        } else if (a[i] < b[i]) {
            bcount++
        }

    }
    arr.push(acount, bcount);
    return arr;
}

//console.log(compareTriplates([17, 28, 30], [99 , 16, 0]));

function diagonalDifference(arr) {
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
           if(i === j) {
               leftSum += arr[i][j];
               rightSum += arr[i][(arr.length - 1)- j];
            }
        } 
    }
    
    return Math.abs(leftSum - rightSum);
}

const arr = [[11,2,4], [4,5,6], [10,8,-12]];

console.log(diagonalDifference(arr));

function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            positive++
        } else if(arr[i] < 0) {
            negative++
        } else {
            zero++
        };
    }
    return (positive/arr.length).toFixed(6) + '\n' + (negative/arr.length).toFixed(6) + '\n' + (zero/arr.length).toFixed(6);
    
}

console.log(plusMinus([-4,3,-9,0,4,1]));



function countDuplicate(str) {
   const obj = {};
   let s = '';
   for (const char of str) {
       obj[char] = (obj[char] || 0) + 1;
      
   }
   console.log(obj)
   for(key in obj) {
        s += key + obj[key];
    }
    return s
}
console.log(countDuplicate('abcceeeeef'))





function nonRepetitive(arr) {
    const updatedArr = [];
    var i, j;
    for ( i = 0; i < arr.length; i++) {
        for( j = 0; j < arr.length; j++) {
            if(i === j) {
                continue;
            }
            if(arr[i] === arr[j]) {
                break;
            }
        }
        if(j === arr.length) {
            updatedArr.push(arr[i]);
        }
    }
    return updatedArr;
}

console.log(nonRepetitive([2, 3, 4, 3, 3, 2, 4, 9, 1, 2, 5, 5]));




const data = [
    {"name":"Anam","grade":"A"},
    {"name":"Arjun","grade":"A+"},
    {"name":"Iram","grade":"B+"},
    {"name":"Zia","grade":"C"},
    {"name":"Reah","grade":"B"},
    {"name":"Karan","grade":"A"},
    {"name":"Mithum","grade":"B"},
    {"name":"Ankur","grade":"B+"}
];

const sortedDataByGrade = data.sort((a, b) => {
    if(a.name.toLowerCase() > b.name.toLowerCase()) {
        return -1
    } if(a.name.toLowerCase() < b.name.toLowerCase()) {
        return 1
    }
    return 0;
});

console.log(sortedDataByGrade);


// sum of natural numbers

function sumOfNaturalNumbers(number) {
    let counter = 0;
    let sum = 0;
    if(number > 0 ) {
        for (let i = 0; i <= number; i++) {
            debugger;
           // console.log(i)
            sum += i;
            counter++
            //console.log(sum)
        }
    }
    return (JSON.stringify({sum, counter}));
}

// console.log(sumOfNaturalNumbers(5));


// function sumOfNaturalNumberON2(n) {
//     let sum = 0;
//     for(let i = 1; i <= n; i++) {
//         for(let j = 1; j <= i; j++) {
//             sum++;
//         }
//     }
//     return sum;
// }

//console.log(sumOfNaturalNumberON2(100));

function sumOfNaturalNumberON1(n) {
    return (n * (n + 1) /2)
}


console.log(sumOfNaturalNumberON1(100000000));

console.log(sumOfNaturalNumbers(100000000));



// swapping 2 vaiable without using 3rd variable

function swappingNumberWithoutUsingThirdvariable(a, b) {
    let a1 = a;
    let b1 = b;
    debugger
    a1 = a1 + b1;
    b1 = a1 - b1;
    a1 = a1 - b1;
    return {
        'a': a1,
        'b': b1   
    } 
}

console.log(swappingNumberWithoutUsingThirdvariable(2,3))


const findLarge = (n, elm) => { 
    let large = 0;
    
 //   console.time(`RESPONSE TIME request ${large}`)
    for(let i = 0; i <= n; i++) {
        if(elm > large) {
            large = elm;
        }else {
            large = i;
        }
    }
      
        console.timeEnd(`RESPONSE TIME request ${large}`)
    return large;
    
}

console.log(findLarge(10, 18));

