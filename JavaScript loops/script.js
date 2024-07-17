// LOOPS
// loops are used to repeat a piece of code

// for loops
// for(start/ initialization; ending condition; updation){
    // what do you what it to do
// }
// initialization is checked only once
// e.g print from 1 till 15
// for (let i = 1; i <= 150; i++) {
//     console.log(i);
// }
// we can also decrease the numbers count
//e.g
// for (let i = 20; i >= 1; i--) {
//     console.log(i);
// }
// table of 2
// for(let twoTable=2; twoTable<=20; twoTable = twoTable+2){
//     console.log(twoTable);
// }
// // table of 12
// for(let twelveTable=12; twelveTable<=120; twelveTable = twelveTable+2){
//     console.log(twelveTable);
// }
// variables decleared in for loops remains in for loops 
// even uptill 25 e.g
// console.log("even:".toUpperCase());
// for (let i = 0; i <= 25; i= i+2) {
//         console.log(i);
// }
// // odds uptill 25 e.g
// console.log("odd:".toUpperCase());
// for (let i = 1; i <= 25; i= i+3) {
//     console.log(i);
// }
// table of any numbers
// let num = +prompt("which table do you want to print?");
// for (let i = num; i <= num*10; i= i+num){
//     console.log(i);
// }
// if you just take num=prompt("hello");
// but prompt takes strings so to convert it into intigers we also use this following methode
// num=parseInt(num); by this statement we can convert strings into intigers
// in short whatever you put in parse it will become intiger OR we will get the intiger value which is in  it

// nested loops
// there can be 3,4,5... nested loops but usually in programming we use 2 nested loops
// nested loop e.g
// for (i = 1; i <= 3; i++){
//     console.log(`outerLoop ${i}`.toUpperCase());
//     for (j = 1; j <= 5; j++){
//         console.log(`innerLoop ${j}`);
//     }
// }
// examples of double, triple etc loops e.g-1
// for (let i=1; i<=2; i++){
//     console.log(`outerLoop ${i}`);
//     for (let j=1; j<=3; j++){
//         console.log(`innerLoop ${j}`);
//             for (let n=1; n<=4; n++){
//                 console.log(`mostInnerLoop ${n}`);
            
//         }
//     }
// }
// e.g-2 different example
// for (let i=1; i<=2; i++){
//     console.table([`outerLoop ${i}`]);
//     for (let j=1; j<=3; j++){
//         console.log(`innerLoop ${j}`);
//     }
//     for (let n=1; n<=4; n++){
//         console.log(`outerLoop2 ${n}`);
//     }
// }

// while loop
// while loop are same as for loop but it has a different syntax
// while loop can do all the work which can be done by for loop and for loop can do all the work which can be done by while loop
// but both has different uses in programming
// e.g generally if we want to update any number we use for loop
// but if we want to deal with different conditions which does not involve more numbers then programming prefer to use while loop
// while loop is just another way of writing a loop
// we will write the while keyword fist then the condition and then what has to be done in the { }
// e.g, while(condition){ what it be done} it workks untill the condition is true
// in for loops var can be created inside the for loops but in while loops we so cannot so we have to create var outside the while loop
// e.g
// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }
// syntax comaprison (forLoops and whileLoops)
// for(i=1;i<=10;i++){
//     console.log(i);
// }
// printing odd numbers upto 20
// i=1;
// while(i<=20){
//     console.table(i);
//     i = i+2
// }
// printing even numbers upto 20
// i=0;
// while(i<=20){
//     console.table(i);
//     i = i+2
// }
// guess the favorite movie game
// methode one using alert
// const favMovie = "laila majnu";
// let guess = prompt("Guess my favorite movie");
// while ( (guess !== favMovie) && (guess !== "quit") ) {
//     alert("Oops wrong guess!" + " " + " write 'quite' to quite the game");
//     guess = prompt("Try again")
// }if(guess === favMovie){
//     alert("Congratulations you got it!");
// }else{
//     alert("You quite, better luck next time!");
// } 
// methode two using consol
// const favMovie = "laila majnu";
// let guess = prompt("Guess my favorite movie");
// while ( (guess !== favMovie) && (guess !== "quit")) {
//     console.log("wrong guess!");
//     guess = prompt("Try again")
// }if(guess === favMovie){
//     console.log("Congratulations you got it right!");
// }
// else{
//     console.log("You quite, better luck next time!");
// } 

// break keyword
// break gets us out of the loop execution
// breaks are generally used with whileLoop but we can also used it forLoop
// e.g 
// let i = 5;
// while (i <= 15){
//     if(i===11){
//         break;
//     }
//     console.log(i);
//     i++;
// }
// e.g-2
// const favMovie = "laila majnu";
// let guess = prompt("Guess my favorite movie");
// while ( (guess !== favMovie)) {
//     if(guess === "quit"){
//         console.log("you quit, better luck next time");
//         break;
//     }
//     console.log("wrong guess!");
//     guess = prompt("Try again")
// }if(guess === favMovie){
//     console.log("Congratulations you got it right!");
// }

// loops in arrays
// for accessing each of the array element we use loop
// e.g
// let animals = ["tiger","lion","cow","sheep","hen","parrot"];
// for(let i=0; i<animals.length; i++){
//     console.log(i, animals[i])
// }
// for reverse 
// let animals = ["tiger","lion","cow","sheep","hen","parrot"];
// for(let i=animals.length-1; i>=0; i--){
//     console.log(i, animals[i])
// }

// nested loops
// we use nested loops with nested arrays and when we want to traverse and access the elements then we use nested loops

// e.g-1
// let animals = [ ["cat","tiger","lion"],["gorilla","monkey","chimpanzee"] ];
// for (let i = 0; i < animals.length; i++){
//     console.log(i, animals[i], animals[i].length);
//     for(let j = 0; j < animals[i].length; j++){
//         console.log(`j=${j}`, animals[i][j]);
//     }
// }

// for of loop
// syntax ->  for(element of collection){ write what you want to do }; //the element in the brackets is a variabla which has to be initialized
// whenever we want to access the collection of an item then we can use for of loops or we want to access string individual charcters we use for of loop
// for now we can use for of loops for arrays and strings
// in for of loops we will initialize a variable but it will not consist of any numbers it will give us the items store in the collection/array
// we should initiaze a good/meaningful name istead of "i" in for of loop
//e.g accessing array elements
// let animals = ["tiger","lion","cow","sheep","hen","parrot"];
// for(animal of animals){
//     console.log(animal);
// }
// e.g accessig nested arrays elements by the help of // NESTED FOR OF LOOPS // nested for of loops are used for nested arrays 
// let animals = [ ["cat","tiger","lion"],["gorilla","monkey","chimpanzee"] ];
// for(animal of animals){
//     console.log(animal);
//     for(ani of animal){
//         console.log(ani);
//     }
// }
// e.g methode-1 accessing string characters
// let myName = "shah hassan afridi";
// for(chars of myName){
//     console.log(chars.toUpperCase());
// }
// e.g methode-2 directly write the string in for of loop brackets, accessing string characters
// for(chars of "shah hassan afridi"){
//         console.log(chars);
//     }
// whenever we have complex arrays then we can use for of loops

