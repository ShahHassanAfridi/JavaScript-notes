// **********JAVASCRIPT FUNCTIONS**********
// ****************************************

// functions are the standing piller of any programming language 
// programming is mostly depended on functions, we will be using functions over and over again this shows that functions are very important
// how it works
// you write a block of code and you can call it again and again without writing it again
// basic functions e.g console.log() || arr.push() || arr.pop()
// these are like magic buttons it performs the work automatically just by calling the function name 
// functions are used to run a block of code just by calling the function name, its helpfull when you want to run a block of code over and over again in multiple places
//syntax;
// function funcName(params) {
        //do something, perform a task
// }
//Example;
// function oneToTen() {
//     for (let i=1; i<=10; i++ ) {
//         console.log(i);
//     }
// }
// but this code will not run because we havent called it yet
// you can call the function by its name with ()
// oneToTen(); // function called to run
// you can call this function multiple times 
// oneToTen();
// oneToTen();
// oneToTen();
// oneToTen();
// oneToTen();

//create a rolling dice which has 1-6 numbers 

// function dice() {
//     let dice = Math.ceil( Math.random() * 6 );
//     console.log(dice);
// };
// dice();

//Functions with Arguments
//Arguments are the values that we pass to a functions and they are also know as variables with let,var,const etc
// arguments are also know as parameters 
// these parameters are used when you want to print different result everytime
//Syntax;   functions funcName (arg1, arg2){ //do something }; funcName();
// we can pass as many arguments as we want 
// how it works
// function myName (name){
//         console.log(name);
// }
// myName("Shah Hassan Afridi"); // "Shah Hassan Afridi" is a parameter which is stored in name argument 
// myName("AbdurRehman");

// adding multiple values

// function studentInfo (name,semester,gpa){
//         console.log(`${name} is in ${semester} semester and his GPA is ${gpa}`);
// }
// studentInfo("Shah Hassan Afridi", "5th", 3.6);
// studentInfo("AbdurRehman", "3rd", 3.4);
//Note:
// in functions you cannot miss out starting arguments but you can miss ending or last arguments, e.g
// function studentInfo (name,semester,gpa){
//         console.log(`${name} is in ${semester} semester and his GPA is ${gpa}`);
// }
// studentInfo("Shah Hassan Afridi", "5th"); // gpa is shows Undifined because its last argument
// studentInfo("AbdurRehman", 3.4); // you will not get the desired result if you miss out arguments which are in the starting or middle 
//Note:
// order is important in functions e.g
// if you pass a value it will store in the first argument even if that value is for the second argument
// order is necessary because javascript does not know that name is a string and age is an number it just knows that it is a random variable

//e.g; add 2 numbers using function
// function addTwoNums (num1, num2) {
//         console.log(num1 + num2);
// };
// addTwoNums(2, 5);
// addTwoNums(26523652324 ,76957577896);
// this is an easy example but we can use functions in many complex cases

//e.g; create a function for calculating average of 3 nums
// function average (num1, num2, num3) {
//         console.log( (num1 + num2 + num3)/3 );
// }
// average(5, 10, 15);

// Note: you can write console.log, Math.random etc without () in console you will get to know if its a functions functions is indicated by "f"
// inbuild functions like console.log, arr.pop etc will not show the code it will show native code and the code that you have written in functions will be shown such as console.log --> average  ...(you will get its definition)

//e.g-2 print any table using function
// function table (n){
//         for (let i=n; i<=n*10; i+=n){
//                 console.log(i);
//         }
// }
// table(2);
// console.log("*^*^*^*^*^*^*^*^*^*^*^*^**^*^*^*^*^^*");
// table(13);

//Return in function
// return is a keyword which is used to return some values from the function
//Syntax;
// function funcName (arg1) {
        //do something
        // return arg;
// };
// console.log(funcName(arg1));

// how it works e.g;
// function addNums (num1, num2){
//         return num1+num2; // this will retun the values
// };
// addNums(2,4); // this will not show the input as values are just returned so so can store this in a variable or you can directly print it in conole.log()
// console.log(addNums(2,4)); 
// OR 
// console.log(addNums(addNums(2,4),4)); 

// if you return anything in function, it will stop there and it wont be able to perform any further task
//e.g;
// function addNums (a, b) {
//         console.log("hello");
//         console.log("bye");
//         return  a * b;
//         console.log("hello again"); // after return will not print
//         console.log("bye again"); // after return will not print
// }
// console.log(addNums(5, 10));

//e.g-2 This example will show that you can return Strings as well and code after return statement will not be printed
// function ageLimite (age) {
//         if (age >= 18 ){
//                 return "Your eligible"
//         }else {
//                 return "Your not eligible"
//         }
//         console.log("bye bye"); // this means nothing in function if values are returned
// }
// console.log(ageLimite(23));

//Note: return statement can return only single value e.g single number and single string, as shown in the above examples
// But if we want to return many values or set of collections then we can return it in objects or arrays because they are single values but it contains complex data
// In short use objects or arrays for returning multiple data 

// example; returm the sum of numbers from 1 upto n
// function sumOfNums (n){
//         sum = 0;
//         for (let i=1; i<=n; i++) {
//                 sum = sum+i;  // or you can write -->   sum += i;
//         }
//         return sum; 
// }
// console.log(sumOfNums(7));
// console.log(sumOfNums(10));
// console.log(sumOfNums(63));

// example; concatenate array strings

// let str = ["shah", "hassan", "afridi"];
// let result = "";

// function concate (str) {
//         for (let i=0; i<str.length; i++){
//         result += str[i];
//         }
//         return result;
// }
// console.log(concate(str));

// these are basic examples but we will be using functions for complex tasks 

// **********SCOPE***********
// ************************** 

// Scope determines the accessibilty of variable, objects, and functions from different parts of the code
// types: 
// function Scope
// block scope 
// lexical scope
// global scope (this is used normally)

// Scope tells us which variable can be use and where to use 

// **********Funtions Scope***********
// ***********************************

// variables defined inside a fucntions are not accessible/visible from outside the functions
// exampel:
// function calSum(a, b){
//         let sum = a + b;
// }
// calSum(5, 5);
// // now here you cannot print the variable sum outside the function because its not accessible
// console.log(sum); // output screen: sum is not defined error 

// error was shown because function variable is defined in function so you cannot use is outside as it wont be accessible 

// you can defined different variables with same name because functions doesnt know if there is a variable of same name outside the function
// example:
// let sum = 99; // this is a normal variable called as global variable 
// console.log(sum);

// function calSum(a, b){
//         let sum = a + b; //function variable
//         console.log(sum);
// }
// calSum(5, 5);
// both sum will have different output because one variable is function scope and the other is global scope
// inside a function, function variable will always be printed as its more specific as comapre to global variable

// let suppose a fucntion does not have a variable then we can use global variables inside it, for example:

// let sum = 99; // this is a normal variable called as global variable 
// console.log(sum);

// function calSum(a, b){
//        // let sum = a + b; //function variable
//         console.log(sum);
// }
// calSum(5, 5);
// function variable is commentout so the result printed is --> 99 99 

// In short
// variables defined inside functions are used inside functions
// variables defined outside funcions(GLOBAL variables) can be used anywhere
// when both fights inside function, funtions variabkle wins
// if they fight outside the function then global variable wins

// **********Block Scope**********
// *******************************

// variables declared inside a {}Block cannot be accessed from outside the block
// this only works on let and const but not on var
// example:

// for (let i=0; i<=5; i++){
//         console.log(i);
// }
// console.log(i); // output shows error because you cannot print/console it outside the block {}

// example-2
// let age = 21;
// if (age > 18){
//        let string = "your eligible";
//        console.log(string);
//        console.log(age); // this shows 21 because its defined in conditional statemet in line number 240
// }
// console.log(string); // this shows undefined because its outside the block{}
// console.log(age); // this shows undefined because its defined in the block{}

// variables defined in loops or if else statement cannot be accessed outside the block{} or loops or conditional statements 

// **********Lexical Variable**********
// ************************************

// A variable defined outside a function can be accessible inside another function defined after the varibale decleration but the opposite is not true e.g calling outerFunction from innerFunction
// example:

// function outerFunction(a,b){
//         let divide = a/b;
//         function innerFunction(){
//                 console.log(divide);
//         }
// innerFunction();
// }
// outerFunction(10, 2);

// now opposite example
// function outerFunction(a,b){
//         let divide = a/b;
//         let string = "hello world";
//         function innerFunction(){
//                 console.log(divide);
//                 console.log(string);
                
//         }
// innerFunction();
// }
// outerFunction(10, 2);
// here in this case the opposite didnt work the string is printed from outerFucntion after calling it from innerFunction this is due to hoisting 
// In JavaScript, "HOISTING" is a behavior where variable and function declarations are moved, or "hoisted," to the top of their scope (whether that’s the entire script or a function) before any code runs. This means that you can use variables and functions before you declare them in the code. However, only the declarations are hoisted—not the assignments

// you cannot call innerFunction outside outerFunction
// function outerFunction(a,b){
//         let divide = a/b;
//         function innerFunction(){
//                 console.log(divide);
//         }
// }
// innerFunction(); // Error: innerFunction is not defined
// outerFunction(10, 2);

// practice question: guess the output
// let greet = "hello"; // global scope
// function greetMuslim(){
//         let greet = "Assalam O Alaikom"; // function scope
//         console.log(greet);

//         function changeGreet(){
//                 greet = "Salam Alaikom";
//                 console.log(greet); // lexical scope
//         }
//         changeGreet();
// }
// greetMuslim();
// console.log(greet);

// *********Function Expression**********
// **************************************

// function expression is another way of writing a function
// here we store a function in a variable
// funtion expressions are nameless as they can be called by the variable name
// example:

// const greet = function(){
//         let sayHi = "hi everyone :)";
//         console.log(sayHi);
// }
// greet(); // this will call the function
// console.log(greet); // while  this will print the whole function
// we will be calling this function with the variable name and parenthesis()

// example 2:

// let sum = function(num1, num2){
//         return num1 + num2;
// }
// console.log(sum(5, 6));
// like normal variable we can change, delete, or update values in function expressions
// now applying this to the above variable 
// sum = function(num1, num2){
//         return num1 - num2;
// }
// console.log(sum(5, 6));
// we did changes to the sum variable

// **********Higher Order Functions***********
// *******************************************

// A function that does one or both:
// takes one or multiple functions as argument
// returns a function
// example:
// let greetMultipleTimes = function(){
//         console.log("hello everyone");
// }
// greetMultipleTimes();
// greetMultipleTimes();
// greetMultipleTimes();
// greetMultipleTimes();
// greetMultipleTimes(); // instead of printing multiples times like this you can use higher order functions, which is coded below 

//higher order function
// let punishment = function(cheat, counts){
//         for(let i=1; i<=counts; i++){
//                 cheat();
//         }
// }
// // argument function
// let cheating = function(){
//         console.log("Im sorry maam I will not again in my exams");        
// }
// console.log(punishment(cheating, 100));
// // OR
// console.log(punishment(function(){console.log("Im sorry maam I will not again in my exams")} , 100));
// this function is called a higher order function because this is taking another function as an argument

// **********Higher Order Function Return**********
// ************************************************

// higher order functions which returns function as an output is called higher order function return
// higher order function are the functions which take single or multiple arguments as a function
// example: check whether the function returns true/false for odd/even

// function oddEvenFactory(request){
//         if(request == "odd"){
//                 return function(n){
//                         console.log(!(n%2==0));
//                 }
//         }else if(request == "even"){
//                 return function(n){
//                         console.log(n%2==0);
//                 }
//         }else{
//                 console.log("wrong request");
//         }
// }
// let request = prompt("Check Even or Odd").toLocaleLowerCase(); // for now we are checking if the number is odd or not
// let func = oddEvenFactory(request);
// let checkNumber = func(prompt("Enter number"));
// console.log(checkNumber);

// ********** Methods ***********
// *******************************

// methods are actions that can be performed on an object
// we know how to define key and values in object but when we define functions for object, then these functions are called methods
// so functions defined in objects are know as methds
// example: Calculator

// let calculator = {
//         add: function(a,b){
//                 return a + b;
//         },
//         sub: function(a,b){
//                 return a - b;
//         },
//         mul: function(a,b){
//                 return a * b;
//         },
//         div: function(a,b){
//                 return a / b;
//         }
// };

// note: JS array and strings are internally objects e.g typeof [1,2,3] //object

// short hand for methods
// here key value pair method is not used instead function is taken directly

// here add,sub,mul,div are the key, its the name of the function
// after this you can normally write the definition of the function 
// when we are using shorthand for method then we dont use function keyword because JavaScript understands the syntax
// now by consoling calculator it will form function like it was forming it in the above calculator and the use of the calculator is also going to be same
// let calculator = {
//         add(a,b){
//                 return a + b;
//         },
//         sub(a,b){
//                 return a - b;
//         },
//         mul(a,b){
//                 return a * b;
//         },
//         div(a,b){
//                 return a / b;
//         }
// };


