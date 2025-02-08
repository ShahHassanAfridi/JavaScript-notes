// ********** Arrow Functions ***********
// **************************************

// arrow functions are compact and have a smaller syntax which means less lines will be occupied 
// these are not stand alone functions, we use these as a value 
// e.g we can assign arrow function to a variable which means that the arrow function is the value of the variable or we can also use arrow functions in higher order function as a parameter/argument 
// the arguments taken by higher order functions are called callbacks so arrow functions can be used as callbacks

// syntax
// below, on the left side its a variable and on the right side its the syntax of arrow functions 
// first put parenthasis() and add number of arguments to it 
// if argument is 1 then you can also remove the () if you want 
// but if theres no argument then you have to put the () so that error is not generated
// we dont write the keyword function for it
// these are nameless functions and are identified by arrow =>
// after this the meaning/definition of the function is written in {}
// const func = (arg1,arg2) => { function definition};

//e.g
// let arrowFunc = (a, b) => {
//     return a+b;
// }
// console.log(arrowFunc(5, 7));
// console.log(arrowFunc(52, 18));

// e.g- taking cube
// let arrowFunc = n => {
//     return n*n*n;
// }
// console.log(arrowFunc(5));
// console.log(arrowFunc(2));

// e.g- taking power
// let arrowFunc = (a, b) => {
//     return a ** b;
// }
// console.log(arrowFunc(2, 3));
// console.log(arrowFunc(5,2));


// ********** Implicit return in Arrow Functions ***********
// *********************************************************

// there are 2 keywords one programming implicite and explicite 
// implicite return means automatic return we dont need to tell to return the value because the value will return automatically 
// explicite means telling them to return a value

// when ever there is only one thing in arrow function and that is to return a single value then we use implicit return in arrow function
// nor we are calling any other function or nor we are printing and calculating anything the we use implicite return in arrow function

// so as arrow function is returning just a single value then we can remove the return keyword 
// for example i have to multiply 2 numbers so,

// let mul = (a, b) => (a * b);
// console.log(mul(5, 4));

// in the above example there abit change in the syntax and that is we will replace curly braces{} with parenthesis () 
// by putting () JS will know that only one value is to be return and no need to write the return keyword
// this will make our code more compact 
// use this syntax for arrow function if you want to return a single value

// example:

// let power = (n) => n*n*n;
// console.log(power(5));
 // its single value and we have studied that in single value brackets becomes optional

// ********** Set Timeout Functions ************
// *********************************************

// for example if we want to set a time for a work that will be done after that time comes then we use Set Timeout function
// this is an inbuild function like math(), this is also already define

// syntax:
// setTimeout (function, timeout)
// arg1 is a callback function and
// arg2 is a timeout you have to enter time in milliseconds (1000ms = 1second)
// timeout will execute the arg1 function after the time is complete
// callback functions are those which are taken/pass as and argument in other functions

// example:

// console.log("hi there");

// setTimeout ( () => {
//     console.log("Peshawar");
// }, 3000 );

// console.log("welcome to");

// in the above code the normal execution will be done but the set Timeout function will be executed after 3seconds because in the arg2 I have set the timeout to 3seconds

// so Set Timeout is usually used for API calls, request response


// ********** Set Interval Functions ************
// **********************************************

// this is same as set timeout by the difference is in arg2
// in set timeout, arg2 will wait for the for the time given and then will execute the arg1 function and thats it 
// but in set interval the arg2 will wait for the time given and then will execute the arg2 function and then it will again wait for the time given in arg2 and then will again execute the arg1 function and this will continue for multiple times 

// example:

// setInterval ( () => {
//     console.log("Pakistan");
// }, 2000 );

// example2:

// setInterval ( () => {
//     console.log("Pakistan");
// }, 1000 );

// setInterval ( () => {
//     console.log("zindabad");
// }, 2000 );

// now how do we stop this
// every set Interval function has its individual ID to stop it 
//  we can store an ID for set Interval function as 

// let idPakistan = setInterval ( () => {
//     console.log("Pakistan");
// }, 1000 );
// console.log(idPakistan); // printing its ID which here is "1"

// let idZindabad = setInterval ( () => {
//     console.log("zindabad");
// }, 2000 );
// console.log(idZindabad);// printing its ID which here is "2"

// now to stop "Pakistan" wite a statement "clearInterval()" and pass the ID in it e.g clearInterval(idPakistan) and this will stop setInterval for printing "Pakistan"

// clearInterval(idPakistan)


// ********** this Keyword with Arrow functions ***********
// ********************************************************

// this keyword works differently with arrow functions and normal function 

// THIS WITH ARROW FUNCTION

// Arrow functions do not have their own this context. Instead, they inherit this from the surrounding (lexical) scope at the time they are defined.
// This means the value of this inside an arrow function is fixed and cannot be changed by call, apply, or bind.
// Arrow functions are useful for preserving this when working in situations like callbacks or methods where this might otherwise change unexpectedly.
//example:

// const object = {
//   name: "Arrow Function",
//   arrowFunc: () => {
//     console.log(this.name); // `this` refers to the global object or `undefined`
//   }
// };
// object.arrowFunc(); // undefined or Error in strict mode

// In the above example, this in the arrow function refers to the outer (lexical) scope, not obj

// THIS WITH NORMAL FUNCTION

// Normal functions have their own this context. The value of this depends on how the function is called:
// When called as a method of an object, this refers to the object.
// When called as a regular function, this refers to the global object (window in browsers, global in Node.js) or undefined in strict mode.
// You can explicitly set this using call, apply, or bind.

// const obj = {
//   name: "Normal Function",
//   normalFunc: function () {
//     console.log(this.name); // `this` refers to `obj`
//   }
// };
// obj.normalFunc(); // "Normal Function"

// In the above example, this in the normal function refers to obj, the object that called it

// arrow and normal function mix example:

// const obj = {
//     value: 42,
//     arrow: () => console.log(this.value), // Lexical: `this` is from the outer scope
//     normal: function () {
//       console.log(this.value); // Dynamic: `this` refers to `obj`
//     }
//   };
//   obj.arrow();  // undefined (or error in strict mode)
//   obj.normal(); // 42
//   console.log(obj);

// practice questions:
// write and arrow function that returns square fo 'n'

// let square = (n) => ( n*n );
// console.log( square(3) );


// write a function that prints "Hello World" 5 times at interval of 2seconds

// let idHelloWorld = setInterval ( () => {
//     console.log("Hello World");
// }, 2000 );

// setTimeout ( () => {
//     clearInterval(idHelloWorld);
//     console.log("5 times completed!!!");
// }, 10000);



