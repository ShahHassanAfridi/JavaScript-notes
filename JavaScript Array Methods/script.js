// ********** Array Methodes **********
// ************************************

// here are some more array methods,
// all the following array methods takes callbacks as an input, so theses are higher order functions which use callbacks

// ********** forEach **********
// *****************************

// Syntax: arr.forEach( some function definition or name );
// we can add a function name or arrow function to it
// then the forEach will run that method in () for all the elements again and again means this method will run on every element individually
// this methods if rarely used now coz most of the time for of loop is used instead of forEach
// for example: using normal function

// let numbers = [1, 2, 3, 4, 5, 6, 7];

// numbers.forEach( function (elements, findIndex) {
//     console.log(elements, findIndex);
// });

// OR  using arrow function

// let numbers = [10, 20, 30, 40, 50, 60, 70];

// numbers.forEach( (elements, findIndex) => {
//     console.log(elements, findIndex);
// });

// OR  using name

// let number = [100, 200, 300, 400, 500, 600, 700];

// let print = function (elements, index) {
//     console.log(elements, index);
// };

// number.forEach(print)

// forEach can also be used for objects
// for example:

// let students = [ {
//     id: 19321,
//     name: "shah hassan afridi",
//     gpa: 3.5
// }, 
// {
//     id: 20160,
//     name: "abdullah orakzai",
//     gpa: 3.3
// }, 
// {
//     id: 12345,
//     name: "abdurrehman",
//     gpa: 3.7
// } ];

// students.forEach((info) => {
//     console.log(info);
//     // console.log(info.name, info.gpa);  try this with as well with the line-60 console
    
// });

// you can also access indivial obeject by using forEach method
// and if you print all object and you also print some data from all of the objects so the data will be printed with the object in which it is stored


// ********** Map **************
// *****************************

// Syntax is same as forEach, it will take a function or name
// map applys the function on all elements, so after the value is returned from each element that is stored in a new array, and that new array has the same size as the original array

// example: elements multiple by 5

// let nums = [1,2,3,4,5];

// let mulByFive = nums.map((elements) => {
//     return elements * 5;
// })
// console.log(mulByFive);

// example: square of elements

// let numbers = [1,2,3,4,5];

// let square = nums.map((elements) => {
//     return elements * elements;
// })
// console.log(square);

// example: if you dont pass anything in the map or you dont return anything in the map then you will get;

// let names = ["hassan", "afaq", "ibramin"];

// let check = names.map( (el) => {

// });
// console.log(check);

// we will get undefined for each element but it will still be the same size as original array 
// undefined is return because our callback didint return anything

// Example: we will create new array for GPA(out of 10) of students
// let students = [ {
//         id: 19321,
//         name: "shah hassan afridi",
//         marks: 90
//     }, 
//     {
//         id: 20160,
//         name: "abdullah orakzai",
//         marks: 85
//     }, 
//     {
//         id: 12345,
//         name: "abdurrehman",
//         marks: 95
//     } ];
    
//     let gpa = students.map((element) => {
//         return element.marks / 10;
//     });
//     console.log(gpa);
    

// ********** Filter **************
// ********************************

// this gives us a new array 
// when we use filter on array and the callback returns true then that element is added to the new array if the callback returns false then the element is not stored in the new array
// the new array is formed depended on whats in callbacks

//example: detect even nums

// let nums = [1, 2, 3, 4, 5, 6, 7];
// let even = nums.filter( (el) => {
//                 return el % 2 == 0;
// } )

//example: detect odd nums

// let nums = [1, 2, 3, 4, 5, 6, 7];
// let odd = nums.filter( (el) => {
//                 return el % 2 !== 0;
// } )

//example: detect nums greater then 5

// let nums = [1, 2, 3, 4, 5, 6, 7];
// let ans = nums.filter( (el) => {
//                 return el > 5;
// } )


// ********** Every ***************
// ********************************

// applys condition on array in form of function or name 
// this returns 2 values true and false
// if every element in the array returns true the every method will return true and if a single value returns false in callback then every method will return false
// this is similar to logical AND operators

// example: check if array elements are even

// let nums = [1, 2, 3, 4, 5, 6, 7];
// let check = nums.every( (el) => {
//                 return el % 2 == 0;
// } )

// let nums = [2, 4, 6];
// let check = nums.every( (el) => {
//                 return el % 2 == 0;
// } )

// ********** Some ****************
// ********************************

// some is like logical OR 
// this also returns true or false
// this returns true when some of the array elements return true for the callbacks

// example:

// let nums = [1, 2, 3, 4, 5, 6, 7];
// let check = nums.some( (el) => {
//                 return el % 2 == 0;
// } )

// let numbers = [1,3,5,7];
// let checking = numbers.every( (el) => {
//                 return el % 2 == 0;
// } )


// ********** Reduce ****************
// **********************************

// this reduced array to a single value 
// single value doesnt mean boolean value it can return any single value depends on the logic written in the reducer function
// this takes 2 arguments (accumulator, element)
// in this the main thing is that the step-1 accumulator value will be stored in step-2 accumulator value and so on

// example:

// let nums = [1, 2, 3, 4];
// let finalResult = nums.reduce( (total, el) => total + el ) 
//     console.log(finalResult);
    
// the output is 10 and the process is

// default value for accumulator is 0 
// in step-1 total+el means 0+1=1
// then is step-2 total+el, now accumulator/total is 1 as we got it from step-1 so 1+2(2 is the second el in array)=3
// and this is how it works

// you can check if the same values are calculated 

// let nums = [1, 2, 3, 4];
// let finalResult = nums.reduce( (total, el) => {
//     console.log(`The accumulator value in every step was ${total}`);
//     return total + el;
// } )
// console.log(finalResult);

// many other things can be done using reduce method but this logic was to sum up the values in the array 

// example: find maximum num in an array, 2 methods can be used, loops and reduce

// let  nums = [1,5,33,99,23, 0, 2,13];
// let maxNum = 0;

// for ( let i = 0; i < nums.length; i++ ) {
//     if ( maxNum < nums[i] ) {
//         maxNum = nums[i]
//     }
// }
// console.log(maxNum);

// reduce method

// let  numbers = [1,5,33,99,23,2,13];

// let maxNum = numbers.reduce( (max, el) => {
//     if ( max < el) {
//         return el;
//     } else {
//         return max
//     }
// } )
// console.log(maxNum);



// Practice problems: 
// check if all the elements in the array are multiple of 10 or not

// let nums = [1,2,30,40,60 ,0, 9];
// let check = nums.every((el) => el % 10 == 0 )
// console.log(check);

// check some elements in the array are multiple of 10 or not

// let nums = [1,2,30,40,60 ,0, 9];
// let check = nums.some((el) => el % 10 == 0 )
// console.log(check);


// create a function to find minimun number in an array 

// let numbers = [22, 30, 2, 40,60 , 9];

// function getMin (numbers) {
//     let minNum = numbers.reduce( (min, el) => {
//         if ( min < el) {
//             return min;
//         } else {
//             return el;
//         }
//     } );
//     return minNum;
// }

// console.log( `The minimum number in the following array ${numbers} is ${getMin(numbers)}` );

// create a function to find maximum number in an array 

// let numbers = [22, 30, 2, 40,60 , 9];

// function getMin (numbers) {
//     let maxNum = numbers.reduce( (max, el) => {
//         if ( max < el) {
//             return el;
//         } else {
//             return max;
//         }
//     } );
//     return maxNum;
// }

// console.log( `The maximum number in the following array ${numbers} is ${getMin(numbers)}` );
