// ********** Spread **********
// ****************************

// spread is used to spread the values of an iterable such as arrays, strings 
// it works like loop, it let us access every value
// syntax: to use spread on something such put three dots before that -> console.log(...array);
// example:

// let array = [1,2,3,4,5,6,7,8,9,0];
// console.log(array);
// console.log(...array); // spread used 
// // OR
// console.log("shah hassan afridi");
// console.log(..."shah hassan afridi");

// example-2:
// in Math object we have many functions and we will use min and max here to understand spread

// let array = [1,2,3,4,5,6,7,8,9,0];
// console.log( Math.min(...array) ); // here the spread has iterated on the array and hence we got the min value


// let array = [1,2,3,4,5,6,7,8,9,0];
// console.log( Math.max(...array) ); // here the spread has iterated on the array and hence we got the max value


// ********** Spread with array literals ************
// **************************************************

// spread can be used with array literals 
// when we already have and existing array and we want a copy os that and assign those values to a new place, then we can use spread to send the values individually 
// example 

// let originalArr = [1,2,3,4,5,6,7,8,9,];
// let copyArr = [...originalArr];
// console.log(originalArr);
// console.log(copyArr); // so this is the copy of originalArr and we can do anything with it e.g push or pop value

// console.log(copyArr.push(0)); // output: 10, means the array size is 11 now 
// console.log(copyArr); // 0 pushed

// //but the originalArr remains same
// console.log(originalArr);

// example-2 
// we can also copy 2 arrays values to a single array

// let even = [2,4,6,8,10];
// let odd = [1,3,5,7,9];

// let numbers = [...even, ...odd];
// console.log(numbers);

// ********** Spread with object literals ************
// ***************************************************

// const data = {
//     email : "hassanafridi@gmail.com",
//     password : "abc123"
// };
// // by copy pasting all values we can make copy using spread, also assigning more values
// const copyData = { ...data, id: 10, country: "Pakistan"}; // we use curly braces for object

// we can also spread array and strings in object using curly braces 

// let array = [1,2,3,4,5,6,7,8,9,0];
// // now to spread it in object each value needs a key but here the index of every value will automatically becomes the key of the value e.g
// let arrToObj = {...array} // use curly braces
// console.log(arrToObj);

// // same works for the strings as well, the index becomes the key 
// let string = {..."shah hassan afridi"};
// console.log(string);


// ********** Rest ************
// ****************************

// rest is just opposite of spread
// this allows a function to take indefinite numbers of arguments and bundle them in an array 
// the value can be string or array 
// rest parameter should be the last argument
// Syntax: rest and spread syntax is same 
// example:

// function myFun(a, b, ...manyMoreArgs) {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("manyMoreArgs", manyMoreArgs);
// }

// myFun("one", "two", "three", "four", "five", "six");

// Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]


// ********** Destructuring ************
// *************************************

// storing values of an array/object in multiple variables
// the array/object will not change but the values will be stored in new varibales
// example: we have a list and we will store the winner and runnerup name 

// let list = ["hamza", "hassan", "abdullah", "ibrahim"];
// let [ winner, runnerup ] = list; // destructuring used

// console.log(list);
// console.log(winner); // hamza
// console.log(runnerup); // hassan

// we can also use Rest concept here by storing all other participants name in a single variable

let list = ["hamza", "hassan", "abdullah", "ibrahim"];
let [ winner, runnerup, ...participants ] = list; // destructuring used

console.log(list);
console.log(winner.toUpperCase()); // hamza
console.log(runnerup); // hassan
console.log(participants); // abdullah, ibrahim

// if you want to do the same thing without destructuring then you can do it this way which is lengthy,

// let list = ["hamza", "hassan", "abdullah", "ibrahim"];

// let winner = list[0];
// let runnerup = list[1];
// console.log(winner,runnerup);

// by this method you cannot even use rest so that all other participants names are store in one variable


// ********** Destructuring with objects *************
// ***************************************************

// let students = {
//     name: "hassan",
//     age: 21,
//     department: "computer science",
//     subjects: ["OS, TOPL, CC, SE"],
//     username: "hassan@gmail.com",
//     password: "abc123"
// };

// let username = students.username;
// let password = students.password;
// console.log(username,password);

// but if our students objects has many properties then this method is going to take more line of code
// it will also makes us declare more variables
// so here we can use destructuring for more compact syntax
// example: 

// let students = {
//     name: "hassan",
//     age: 21,
//     department: "computer science",
//     subjects: ["OS, TOPL, CC, SE"],
//     username: "hassan@gmail.com",
//     password: "abc123"
// };

// let { username, password } = students;  // use curly braces for objects
// console.log(username, password);

// in the above code the username and password key will be searched in students object and the key value will be stored in the variable username and password

// if we use write just user instead of username then the output would have been undefined because the key user was searched in the student object but it was not there e.g
// console.log(user,password);


// if you dont want undefined then store the username key in other variable e.g 
// let students = {
//     name: "hassan",
//     age: 21,
//     department: "computer science",
//     subjects: ["OS, TOPL, CC, SE"],
//     username: "hassan@gmail.com",
//     password: "abc123"
// };

// let { username: user, password } = students;
// console.log(user);


// we can also add more values to students e.g adding the location
// let students = {
//     name: "hassan",
//     age: 21,
//     department: "computer science",
//     subjects: ["OS, TOPL, CC, SE"],
//     username: "hassan@gmail.com",
//     password: "abc123"
// };

// let { username, password, place = "Pakistan" } = students; // Pakistan is the defualt value here
// console.log(place);


// suppose the place is there in students object then the place in object will be higher preference and thus it will take the default value position
// let students = {
//     name: "hassan",
//     age: 21,
//     department: "computer science",
//     subjects: ["OS, TOPL, CC, SE"],
//     username: "hassan@gmail.com",
//     password: "abc123",
//     place: "Turkey"
// };

// let { username, password, place = "Pakistan" } = students; // Pakistan is the defualt value here
// console.log(place);


