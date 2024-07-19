// if, else if, else, Switch

// if statement
// if a keyword in javascript 
// if is used to check the condition if its true it will execute it 
// e.g
// let age = 22;
// if(age >= 18){
//     console.log("you can vote");
// }if(age < 18){
//     console.log("you cannot vote");
// }
// // e.g-2 traffic lights
// let color = "green";
// if(color === "red"){
//     console.log("Stop!");
// }if(color === "yellow"){
//     console.log("Slow down!");
// }if(color === "green"){
//     console.log("Go!");
// }

// else-if statement
// when if statement is not true then else-if statement is executed when its true
// else-if can be written multiple times
// it is always written after if statement 
// e.g
// let color = "green";
// if(color === "green"){
//     console.log("Go!");
// }else if(color === "yellow"){
//     console.log("Slow down!");
// }else if(color === "red"){
//     console.log("Stop!");
// }

// else statement
// else statement tells us if the above all statement are wrong then what should be done
// we dont give any conditon in else statement if executes whats written in it
// it only works if the above all conditions are false
// e.g-1
// let age = 17;
// if(age >= 18){
//     console.log("you can vote");
// }else {
//     console.log("you are not eligible");
// }
// e.g-2
// let color = "purpule";
// if(color === "green"){
//     console.log("Go!");
// }else if(color === "yellow"){
//     console.log("Slow down!");
// }else if(color === "red"){
//     console.log("Stop!");
// }else{
//     console.log("wrong color or light is broken");
// }

// nested if-else
// in nested we have if-else inside if-else and we can have many levels
// e.g
// let marks = 60;
// if(marks === 60){
//     console.log("congratulations you have pass");
//     if(marks === 60){
//         console.log("your grade is B");
//     }else{
//         console.log("your grade is lower the B");
//     }
// }else{
//     console.log("you have failed, better luck next time");
// }

// switch statement
// it is used when we have some fixed values that we need to compare to
// it is not much used in programming
// at one time only one switch works in javascript
// switch statements are also usefd for checking consitions and when there are alot of conditions then we use switch statement
// u can also say that it is another way of writing if-else statement but its camparison is on fixed values
// syntacx 
// switch(variable name){ case 1: ....; break; case 2: ....; break; case 3: ....; break; defualt: ....;};
// break is important in switch because without break all the switches will turn on after the condition of a partiular case is true
// default works as else statement, if above all consditons are false then execute default 
// e.g traffic ligth
// let color = "green";
// switch (color) {
//     case "red":
//         console.log("Stop!");
//         break;
//     case "yellow":
//         console.log("Slow down!");
//         break;     
//     case "green":
//         console.log("Go!");
//         break;
//     default:
//         console.log("Traffic light is broken");
//         break;
// }
// if we remove the breaks all the console values/strings will be printed
// e.g printing 7day of week 
// let day = 2;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;   
//     case 2:
//         console.log("Tueday");
//         break;   
//     case 3:
//         console.log("Wednesday");
//         break;    
//     case 4:
//         console.log("Thursday");
//         break;    
//     case 5:
//         console.log("Friday");
//         break;    
//     case 6:
//         console.log("Saturday");
//         break;    
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Wrong day!");
//         break;
// }

