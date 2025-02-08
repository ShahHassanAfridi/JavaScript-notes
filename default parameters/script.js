// ********** Default Parameter ***********
// ****************************************

// giving a defualt value to a parameter 
// e.g

// function add ( a, b =2 ) {
//     return a + b;
// }
// console.log( add(2) ); // no need to give a value to b as it already have a default value 


// function add ( a, b =2 ) {
//     return a + b;
// }
// console.log( add(2, 8) ); // but is you give a value to b then it will replace the default value 


// function add ( a = 2, b ) {
//     return a + b;
// }
// console.log( add(2) ); // this will give NAN as it works in order and 2 is been initiated to a and b remain undefined

// function add ( a = 2, b ) {
//     return a + b;
// }
// console.log( add(7, 3) ); // here the default value of a is replaced with 7 and b is given the value of 3 
