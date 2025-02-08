// ********** this keyword ***********
// ***********************************

// "THIS" keyword refers to an object that is executing the current piece of code
// in simple words the object which is executing a methode is called this(keyword)
// this keyword has many uses in javascript depending upon the context
// example:

// const studentInfo = {
//     stName : "Shah Hassan Afridi",
//     id : 19321,
//     automata : 84,
//     database : 89,
//     dataDesign : 88,
//     pakStudies : 85,
//     calcAvg(){
//         let subjectsAvg = (this.automata + this.dataDesign + this.database + this.pakStudies) / 4;
//             return console.log(`${this.stName} has scored the average of ${subjectsAvg} marks`)          
//     }
// }
// the above code will show error(e.g automata,dataDesign etc is not defined) if we dont use THIS keyword 
// the code shows that the methode cannot directly access the parameters of this object so we use THIS keyword to tell the methode that we are callig these parameters through THIS keyword 


// ********** try and catch ************
// *************************************

// the try statement allows you to define a block of code to be tested for errors while it is being executed
// the catch statement allows you to define a block of code to be executed, if an error occurs in the try block 
// try and catch are used in long programs or for API(application programming interface) to manage errors so that our website dont get crash
// e.g

// console.log("line no.1");
// console.log("line no.2");
// console.log("line no.3");
// console.log(hello);
// console.log("line no.5");
// console.log("line no.6");
// console.log("line no.7");
// in the code above "hello" will not be printed because its not defined and because of this error the rest code(line5,6,7) will also not print 
// so to avoid such errors we can write the "hello" code in try and catch so that the rest of the code is not effected, so lets try it

// console.log("line no.1");
// console.log("line no.2");
// console.log("line no.3");
// // let hello = "im defined now hahaha" // if you comment this the try and catch will run else the hello value will be printed
// try {
//     console.log(hello);
// } catch {
//     console.log("hello is not defined!!!");
// }
// console.log("line no.5");
// console.log("line no.6");
// console.log("line no.7");

// you can also print what error has occured by writing catch in function format and passing any name for error
// e.g
// console.log("line no.1");
// console.log("line no.2");
// console.log("line no.3");
// try {
//     console.log(hello);
// } catch (errorDetails) {
//     console.log("hello is not defined!!!");
//     console.log(errorDetails);
// }
// console.log("line no.5");
// console.log("line no.6");
// console.log("line no.7");

// e.g

// console.log("Hello there please enter your password");
// // a = +prompt("Enter your password"); // if you comment "a" for maintainance etc issue the error will be printed to the users 

// try {
//     if(a == 1234){
//         console.log("The password is correct");
//     } else {
//         console.log("Incorrect password try again");
//     }
// } catch (error) {
//     console.log("This portion is under maintainance, please try again after 1 hour");
//     console.log(error);
// }


