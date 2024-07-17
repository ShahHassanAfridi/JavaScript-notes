// JAVASCRIPT ARRAYS

// arrays are linear collection of things 
// array is a data stucture which means it can store data 
// we can store different type of data in arrrays
// square brackets are used for arrays []
// arrays also has index same as strings
// arrays also shows total number of length with output
// arrays are object type
// arrays are mutable means changes can be made in an array

// let student1 = "ali";
// let student2 = "saif";
// let student3 = "musa";
// instead use array
// let students = ["ali","saif","musa"];
// console.log(students);

// accessing individual item by index
// elements not stored in array will be shown as undefined if tried to accessed
// let num = [1,2,3,4,5];
// console.log(num[3]);
// OR access any element using square brackets
// let myFullName = "shah hassan afridi";
// console.log(myFullName[5]);

// to fined array length
// length starts with 1 while index starts with 0
// let nums = [1,2,3,4,5,6,7];
// console.log(nums.length);

// accessing a string in array
// let students = ["ali","saif","musa"];
// console.log(students[1]);

//accessing a character in a string 
// let animals = ["tiger", "lion"];
// console.log(animals[1][3]);

// finding length of a string
// let animals = ["tiger", "lion"];
// console.log(animals[1].length);

// mixed arrays
// let information = ["hassan", 21, 3.6];
// console.log(information);
// empty array
// data  can be added to empty array later own
// let nullArray = [];
// console.log(nullArray);

// mutable array example 
// let animals = ["tiger","lion","parrot","pigeon"];
// animals[1] = "cat";
// console.log(animals);
// we can create elements on the index which doesnt even exists e.g
// accessing empty array index will show undefined but it will be counted in arrays length
// let animals = ["tiger","lion","parrot","pigeon"];
// animals[7] = "cat";
// console.log(animals);

// Array methodes
// push- add to end
// pop- delete from end and return it
// unshift- add to start
// shift- delete from start and returns it

// push e.g
// you can push multiple times
// let colors = ["green","white","red"];
// colors.push("blue");
// colors.push("black");
// console.log(colors);

// pop e.g
// nothing to mention in pop brackets 
// you can pop multiple times
// in pop and shift you can only save one popped or shifted elements in one var
// let colors = ["green","white","red"];
// colors.pop();
// colors.pop();
// console.log(colors);

// unshift e.g
// you can unshift multiple times
// let colors = ["green","white","red"];
// colors.unshift("blue");
// console.log(colors);

// shift e.g
// nothing to mention in shift brackets 
// you can shift multiple times
// in pop and shift you can only save one popped or shifted elements in one var
// let colors = ["green","white","red"];
// colors.shift();
// console.log(colors);

// pop and shift returns the value, it has its own importance. Here's an example for,
// shift
// let myInstaFollowers = ["afaq","arsalan","ahmad","mujtaba","amir"];
// let blockedFollowers = myInstaFollowers.shift();
// console.log(myInstaFollowers);
// console.log(blockedFollowers);
// pop
// let myInstaFollowers = ["afaq","arsalan","ahmad","mujtaba","amir"];
// let blockedFollowers = myInstaFollowers.pop();
// console.log(myInstaFollowers);
// console.log(blockedFollowers);

// practice question, change the following array below into => ["july","june","march","august"]
// in pop and shift you can only save one popped or shifted elements in one var
// but you can save multiple elements of an array in a single var using splice methode
// let months = ["janvuary","july","march","august"]
// months.shift();
// months.shift();
// months.unshift("june");
// months.unshift("july");
// console.log(months);

// ARRRAY METHODES
// indexof: returns index of something
// includes: search for a value in boolean
// indexof e.g
// returns index, 1,2,3,4
// for not found we get -1
// let animals = ["tiger","cow","goat","sheep"];
// console.log(animals.indexOf("goat")); //output will be 2
//includes e.g
// returns boolean values, true or false
// let animals = ["tiger","cow","goat","sheep"];
// console.log(animals.includes("goat"));
// console.log(animals.includes("lion"));

// concate and reverse methode
// concate
// concate methode is used to concatenate arrays
// concate creates new array original array remains the same
// e.g
// let firstName = ["shah hassan"];
// let lastName = ["afridi"];
// console.log(firstName.concat(lastName));
// the one written first will take first place in an array
// console.log(lastName.concat(firstName));
// reverse
// reverse methode is used to reverse the array sequence
// it changes the original array, it doesnt creates new array
// brackets remains empty
// let animals = ["sheep","cow","goat","hen"];
// console.log(animals.reverse());

// slice methode
// it copies a portion of an array, original array remains the same
// brackets values are optional
// let animals = ["sheep","cow","goat","hen"];
// console.log(animals.slice()); // returns full array 
// let animals = ["sheep","cow","goat","hen"];
// console.log(animals.slice(2));
// let animals = ["sheep","cow","goat","hen"];
// console.log(animals.slice(1,4)); // ending value works as -1 e.g 4 is 3 and 3 is 2
// let animals = ["sheep","cow","goat","hen"];
// console.log(animals.slice(-1));
// console.log(animals.slice(-3));
// let animals = ["sheep","cow","goat","hen"];
// console.log(animals.slice(animals.length-2));
// writing positive index which is not in the array will give you an empty[] array 
// but writing negative index which is not in the array will print the maximum size of the array not the empty array

// splice methode 
// splice is used to remove/replace and add elements in the array
// it changes the array, no new array is printed 
// we have three peremeters to be added in the splice e.g
// str.splice(start, deleteCount, item1, item2, itemN)
// the deleteCount is optional or you can write 0 if you dont want to delete any items
// splice e.g
// let subjects = ["computerScience", "mathematics", "physics", "arts", "english"]
// console.log(subjects.splice(0, 0, "urdu", "biology", "chemestery"));
//OR 
// let subjects = ["computerScience", "mathematics", "physics", "arts", "english"]
// console.log(subjects.splice(2));
//OR
// let subjects = ["computerScience", "mathematics", "physics", "arts", "english"]
// console.log(subjects.splice(1,3));
//OR
// let subjects = ["computerScience", "mathematics", "physics", "arts", "english"]
// console.log(subjects.splice(3, 1, "urdu", "biology", "chemestery"));
// splice e.g-1
// var subjects = ["computerScience", "mathematics", "physics", "arts", "english"]
// var subjectsRemoved = subjects.splice(1, 2, "english", "urdu");
// console.log(subjectsRemoved);
// e.g-2
// var instaFollowers = ["afaq","arsalan","ahmad","mujtaba","amir"];
// var blockedFollowers = instaFollowers.splice(2, 1,);
// var reportedFollowers = instaFollowers.splice(1, 1);
// var restrictedFollowers = blockedFollowers + reportedFollowers;
// console.log(restrictedFollowers);
//OR
// console.log(blockedFollowers + " " + reportedFollowers);
//OR
// console.log(blockedFollowers.concat(reportedFollowers));

// sort methode
// it is used to sort elements in acending and decending order
// sort works on characters and string only, it does not work on numbers
// in sort array is converted to string and then sorted 
// e.g
// let followers = ["shayan","mustafa","umair","ali","zubair","zahid","afaq"];
// console.log(followers.sort());
//OR 
// let  characters = ["Y","B","Z","A","X","C"];
// console.log(characters.sort());

// practice question 
// change the following array ["janvuary","july","march","august"] into ["july","june","march","august"] using splice methode
// let months = ["janvuary","july","march","august"];
// months.splice(0 , 2, "july", "june");
// console.log(months); 
//OR
// let months = ["janvuary","july","march","august"];
// months.splice(0, 1);
// months.splice(1, 0, "june");
// console.log(months);

//pratice question
//return the index of the "hassan" if the array was reversed, ["asif","hassan","umair","ali","zubair","zahid","afaq"]
// let names = ["asif","hassan","umair","ali","zubair","zahid","afaq"];
// names.reverse();
// console.log(names.indexOf("hassan"));
//OR use chaining methode
// let names = ["asif","hassan","umair","ali","zubair","zahid","afaq"];
// console.log(names.reverse().indexOf("hassan"));

// array references
// we can distinguish array references by address in memory
// in strings 1 == 1 or 11 === 1 is true
// but in array 1 == 1 or 1 === 1 is false because every array address in different untill we write,
// array1 = array2 and it returns true

// constant array (const)
// to convert any array to constant we use const arr = [];
// we can do multiple operations on array items but after making it const we can not completely convert the array into a new array
// const makes the array name constant not the valuse however we cannot completely change or convert the values
// const name stores the address thats why it cannot changed
// e.g 
// if const A = [1,2,3] then
// we cannot write A = [1,2,3] OR [4,5,6] because we cannot completely convert an array to a new one
//e.g
// const A = [1,2,3];
// A = [1,2,3];
// console.log(A);
//OR
// A = [4,5,6];
// console.log(A);
// hower we can add delete sort etc in the array 
// e.g 
// const A = [1,2,3];
// A.push(4,5);
// console.log(A);
//OR
// A.pop();
// console.log(A);

// nested arrays
// also called 2D array
// in programming single or nested arrays are used but not multiple next arrays e.g array inside array and inside array
// nested array e.g
// let numbers = [ [1,2,3],[4,5],[7,8,9],[10,11,12,13,14,15] ];
// console.log(numbers);
// nested arrays are not only in linear collection of things 
// if row 1 is having 3 items then automatically a 2nd row will start which is also having N items
// now to access any array we use numbers[array-row][array-colum]
// e.g
// let numbers = [ [1,2,3],[4,5],[7,8,9],[10,11,12,13,14,15] ];
// console.log(numbers[0][0]);
//OR
// console.log(numbers[1][0]);
//OR
// console.log(numbers[2][2]);
//OR
// console.log(numbers[3][5]);

// practice question making tic-tac-toe game state using nested array 
// let game = [ ["X","","O"],[" ","X",""],["O","","X"] ];
// console.log(game);
//OR
// let game = [ ["X",null,"O"],[null,"X",null],["O",null,"X"] ];
// console.log(game);
// changes and methods can be applied in nested arrays
// e.g adding 'O' in first row and 0th column column
// let game = [ ["X",null,"O"],[null,"X",null],["O",null,"X"] ];
// console.log(game);
// console.log(game[1][0] = "O");

