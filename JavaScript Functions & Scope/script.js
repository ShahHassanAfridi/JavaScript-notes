// JavaScript Functions

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

// Scope to be continued.....