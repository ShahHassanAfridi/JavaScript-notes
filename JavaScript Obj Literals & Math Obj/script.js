// Object literals 
// object literals are used to store keyed collections and complex entities
// e.g Student is and object and student has name "shah hassan" age 22 marks 90
// in the above example name, age, marks are keys to open values and the values are "shah hassan", 22, 90
// we store simple data in arrays, complex data can also be stored but it is preffered to store it in the object literal
// generally object literals are used and preffered to store complex data
// syntax; const is more preferred as we dont want null values to be added
// var/const student = {
//         name : "shah hassan",
//         age : 22,
//         marks : 90.5
//   }; 
// in array keys cannot be printed but in object literals it can be
// e.g;
// const store = {
//     itemsAvailable : ["jackets", "shoes", "trousers"],
//     discount : 30,
//     price : 5000
// };
// there is no specific order for values to print in object literals  e.g age can be printed before name; the main thing is that its key pair is printed with it  
// that is why keys are used in object literals 
// e.g creating X post which includes: username, content, likes, reposts, tags
// const post ={
//     userName : "shah hassan afridi",
//     content : "object literals in javascript",
//     likes : 1000,
//     reposts : 17,
//     tags : ["@google", "@amazon", "@microsoft", "@hp", "dell", "@devsinc"]
// };
// console.log(post);
// facebook etc stores such type of complex data in object literals 

// how get values from object 
// syntax -->  obj["key"]; OR obj.key
// const post = {
//     userName : "shah hassan afridi",
//     content : "object literals in javascript",
//     likes : 1000,
//     reposts : 17,
//     tags : ["@google", "@amazon", "@microsoft", "@hp", "dell", "@devsinc"]
// };
// console.log(post["userName"],post.tags);
//OR
// console.table(post)
// however using post.tags is more easy to use 

// conversion in getting values 
// javascript automatically converts object keys into string 
// even if the key is a number or a keyword JS obj will convert it into string 
// e.g:
// let obj = {
//     1 : "a",
//     2 : "b",
//     null : "c",
//     undefined : "d",
//     true : "e",
//     false : "f"
// };
// console.log(obj);
// console.log(obj.null); // will get keywords with . but numbers cannot be printed with . error will be showm thats why square brackets are preffered here
// console.log(obj[1]);

// add/update values
// for adding or updating values normal var methode is used e.g
// const post = {
//     userName : "shah hassan afridi",
//     content : "object literals in javascript",
//     likes : 1000,
//     reposts : 17,
//     tags : ["@google", "@amazon", "@microsoft", "@hp", "dell", "@devsinc"]
// };
// post.likes = 1500; // likes updated to 1500
// post.content = "add and updating values in object literals" // added another value
//OR 
// post.location = "Pakistan";
// you can also use square bracket methode instead of dot methode

// delete values in obj leterals
// generally delete is not used too much 
// syntax:  first you have to write delete keyword this is basically an operator. delte obj.keyName;
// const post = {
//         userName : "shah hassan afridi",
//         content : "object literals in javascript",
//         likes : 1000,
//         reposts : 17,
//         tags : ["@google", "@amazon", "@microsoft", "@hp", "dell", "@devsinc"]
//     };
// delete post.userName; 

// nested objects or objects of objects 
// its is used when ur storing multiple records e.g students info 
// you can store individual student info in it 
// in the following example we will make each student an object with the help of curly brackets 
// const studentRecord = {
//     hassan : {
//         semester : 4,
//         grade : "A"
//     },
//     abdullah : {   
//         semester : 4,
//         grade : "B+"
//     },
//     abdurrehman : {
//         semester : 2,
//         grade : "A+"
//     }
// };
// accessing abdullah info 
// console.log(studentRecord.abdullah);
// now accesing a key e.g grade
// console.log(studentRecord.abdullah.grade);
// now updating his info 
// studentRecord.abdullah.semester = 5;
// studentRecord.abdullah.grade = "A";
// console.log(studentRecord.abdullah);

// Array of objects 
// means storing data in array using multiple objects
// e.g
// const studentInfoArr = [
//     {
//         name : "shah hassan afridi",
//         semester : 4,
//          grade : "A"
//     },
//     {
//         name : "abdullah",
//         semester : 4,
//         grade : "B+"
//     },
//     {
//         name : "abdurrehman",
//         semester : 2,
//         grade : "A+"
//     }
// ];
// accessing in arr of obj
// console.log(studentInfoArr[0]);
// accessing a  key 
// console.log(studentInfoArr[0].name);
// update 
// console.log(studentInfoArr[0].grade = "A+");
// add 
// console.log(studentInfoArr[0].address = "haytabad");
// another obj to add into arr
// studentInfoArr.push({ 
//     name : "afaq",
//     semester : 5,
//     grade : "B+"});
// accessing new enter data and updating it 
// console.log(studentInfoArr[3].name = "afaq ahmad");

// Math objects
// JS has an exsisting object which is math object which is the collection of mathematical properties and methodes
// e.g if we need todo mathematical calculation or we want const values such as Pi value or we want to do any operations so this all collection we have in math operations
// its alreay available in JS
// write --> Math in console and expand it you we will all objects in it 
// e.g math properties,
// console.log(Math.PI); // we will get PI value
// these are used when you want to build a website in which maths and pysics are more used
// Maths Methodes which are most commonly used are as followed;
// syntax: Math.abs(n)
//console.log(Math.abs(-10.5)); // this gives us absolute number excluding negative and positive signs
// syntax: Math.pow(a, b)
//console.log(Math.pow(2,3)); // this gives us 2 to the power of 3
// syntax: Math.floot(n)
//console.log(Math.floor(10.00001)); // this gives us nearest smallest int value, gives less then or equal to value
//console.log(Math.floor(10.99999));
//console.log(Math.floor(-5.5)); // will give us -6 because -6 is smaller then -5
// syntax: Math.ceil(n)
//console.log(Math.ceil(10.00001)); // this gives us nearest largest int value
//console.log(Math.ceil(10.99999));
//console.log(Math.ceil(-5.5)); // this will give us -5 because its greater then -6
// syntax: Math.random(n)
// Syntax: Math.random(n) gives us random value between 0 and 1 exluding 1
// Math obj is mostly used to generate random numbers 
// console.log(Math.random());

// generating random intigers
// console.log(Math.random()); // this generates 0-1 numbers but they are not intigers
// now if you want to generate integers from 1-10 the you will * it by 10 
//e.g 
// console.log(Math.random() *  10); // the tackling the problems which are decimals numbers and it does not have 10 and it also contains 0
// to tackle decimal numbers we can use Math.floor()
// console.log(Math.floor(Math.random() * 10 ));
// now removing 0 and adding 10
// console.log(Math.floor(Math.random() * 10 ) +1 ); // add +1 
// or you can use Math.ceil() to make it easy for yourself 
// console.log(Math.ceil(Math.random() * 10 ));
// Now for generating random numbers between 1-100, simply * with 100
// console.log(Math.ceil(Math.random() * 100 ));
// example- generate random numbers from 21-39
// console.log(Math.ceil(Math.random() * 19 ) + 20 ); // simply * by 19 and + 20

// gussing game 
// alert("Welcome to Guess the number game");

// console.log("For Hint enter 'Hint' ");
// console.log("To Quit enter 'Quit' ");

// const maxNumber = prompt("Enter the maximum number");
// const randomNumber = Math.ceil( Math.random() * maxNumber );
// let userGuess = prompt("Guess the number");

// while (true) {
//     if (userGuess == "quit") {
//         alert("Game quit!")
//         break;
//     }else if (userGuess == randomNumber) {
//         alert("Your guess was right congrats!")
//         break;
//     }else{
//         userGuess = prompt("Wrong guess try again!");
//         continue;
//     }
//  };
// better to add hint option aswell
