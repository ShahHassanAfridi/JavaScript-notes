// JavaScript STRINGS

// WHITE SPACES REMOVING FROM START TO END
// creats new string and removes spaces 
// strings are immutable 
// var msg = "    hello there    ";
// msg.trim()
// OR
// var password = prompt("enter your assword");
// console.log(password.trim())
//OR
// var code = +prompt("enter your code");
// var newCode = code.trim();
// console.log(newCode);

// CONVERT UPPER CASE AND LOWER CASE
// var name1 = "shah hassan afridi";
// var name2 = " There's a Guy";
// console.log(name1.toUpperCase());
// console.log(name2.toLowerCase());

//FINDING INDEX
// -1 for not found
// shows first occurrence
// var string1 = "shahhassanafridi";
// console.log(string1.indexOf("hassan"));

//METHODE CHAINING
// starts from left to right, first it will trim then uppercase
// var message = "       hello there        ";
// newMessage = message.trim().toUpperCase();
// console.log(newMessage);

// SLICE
// returns a part of original string in a new string 
//ending index is not included
// var myName = "shah hassan afridi";
// console.log(myName.slice(5,11));
//OR
// console.log(myName.slice(5, myName.length));
//OR for printing only "r"
// -4 from total index
// console.log(myName.slice(-4)); 

// REPLACE
//replaces a string and returns a new string 
// var message = "I like football";
// console.log(message.replace("like","love"));
//OR for replacing double-triple values
// console.log(message.replace("o","O").replace("o","O"));

// REPEAT
// returns a string with number of copies
// var string1 = "I am sorry ";
// console.log(string1.repeat(5));

//ORIGINAL STRING WILL ALWAYS REMAIN THE SAME 
