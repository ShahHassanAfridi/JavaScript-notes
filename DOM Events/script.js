// *********** DOM Events ************
// ***********************************

// events are signals that something has occured such as user-input or action
// these are the signals that tells us some activity is done on the page, by activity i meaan a button is pressed, somthing is dragged etc which is triggered through our mouse or keybaord on our webpage. This is called Event
// this allow us to do something when a user click on submit button etc 

// ***** Inline Events *****
// *************************

// inline evnets are coded inside html tag 
// these are not preferred for repetitive things such as liking a post using onclick event, and there can many posts means you have to write inline code for every post
// but we can use this in rare cases and can be considered as important

// now we will be trying all important events that are used in day to day codding 

// ***** onclick *****
// *******************

// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function() {
//     console.log("hello there im onclick event");
// }

// // OR you can make function seperatly

// function greet () {
//     alert("hellooooo!!");
// }
// btn.onclick = greet;

// but the above code was for a single button and we can do this for multiple buttons aswell by following method

// let btns = document.querySelectorAll("button"); // this will access all buttons

// function like () {
//     alert("post liked");
// }

// // the loop will help us to use the like function for all the btns without this loop function will be triggered just on the first button 
// for (btn of btns) {
//     btn.onclick = like; // dont use () with like function so that it dont directly execute there, it will wait for button to be clicks
// }
// by this loop onlick property is applied to all the buttons 

// this is useful when there are many buttons 
// this makes the code less 
// this is efficient 


// ***** onmouseenter *****
// ************************

// let btns = document.querySelectorAll("button"); 

// function like () {
//     alert("post liked");
// }
// function enter () {
//     console.log("you entered button");
// }

// for (btn of btns) {
//     btn.onclick = like;
//     btn.onmouseenter = enter;
// }



// ***** Event Listner *****
// *************************

// addEventListener :
// *****************

// syntax : element.addEventListner(event, callback)

// the main advantage of event listener is that is can take multiple values, while other evnets such as onclick,onmouseenter cannot take multiple values

// example : this will not work because it cannot take multiple values 

// let btns = document.querySelectorAll("button"); 

// function like () {
//     alert("post liked");
// }
// function enter () {
//     console.log("you entered button");
// }

// for (btn of btns) {
//     btn.onclick = like;
//     btn.onclick = enter; // the last event will work only
// }

// example : event listner

// let btns = document.querySelectorAll("button"); 

// function like () {
//     alert("post liked");
// }
// function enter () {
//     console.log("you entered button");
// }

// for (btn of btns) {
//     btn.addEventListener("click", enter)
//     btn.addEventListener("click", like)  // comment out this or dblclick
//     btn.addEventListener("dblclick", function () {
//         console.log("you double clicked!!!");
//     })
// }

// this is important
// and you can check many other events on MDN 


//  Activity generate random color // HTML,CSS

// its html/css is also there check the comments

// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {

//     let h3 = document.querySelector("h3");
//     let rgbColor = randomColor();
//     h3.innerText = rgbColor;
//     h3.style.color = rgbColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = rgbColor;
//     div.style.border = rgbColor;

//     btn.style.backgroundColor = rgbColor;
//     btn.style.color = "white";
//     btn.style.border = rgbColor;
//     btn.style.boxShadow = rgbColor;

//     let h1 = document.querySelector("h1");
//     h1.style.color = rgbColor;

//     console.log("Color updated!");
// });

// function randomColor () {
//    let red = Math.floor( Math.random() * 255 ); // rgb values raise from 0 to 255
//    let green =  Math.floor( Math.random() * 255 );
//    let blue = Math.floor( Math.random() * 255 );
//    let color = `rgb(${red}, ${green}, ${blue})`;

//    return color;
// };


// ***** EventListner for elements *****
// *************************************

// these are not just button specific, they can be applied to other elements as well such as pragraph, div etc
// example: 

// let p = document.querySelector("p");
// let div = document.querySelector("div");

// p.addEventListener("click", function () {
//     alert("paragraph clicked!");
    
// })
// div.addEventListener("click", function () {
//     alert("div clicked!");
    
// })


// ***** "this" in Event Listener *****
// ************************************

// when "this" is used in a callback of event handler of something, it refers to that something
// for example : highlight the code/lines

// let h1 = document.querySelector("h1");
// let p = document.querySelector("p");
// let div = document.querySelector("div");

// h1.addEventListener("click", function () {
//     console.log("highlighted!");
//     this.style.backgroundColor = " rgba(251, 255, 0, 0.5)";  // here "this" means h1

// })
// p.addEventListener("click", function () {
//     console.log("highlighted!");
//     this.style.backgroundColor = " rgba(251, 255, 0, 0.5)";

// })
// div.addEventListener("click", function () {
//     console.log("highlighted!");
//     this.style.backgroundColor = " rgba(251, 255, 0, 0.5)";

// })

// we can make this code less and efficient by the following way 

// let h1 = document.querySelector("h1");
// let p = document.querySelector("p");
// let div = document.querySelector("div");

// function highlight () {
//     console.log("highlighted!");
//     this.style.backgroundColor = "rgba(251, 255, 0, 0.5)";
    
// }

// h1.addEventListener("click", highlight);
// p.addEventListener("click", highlight);
// div.addEventListener("click", highlight);


// ****** Keyboard Events ******
// *****************************

// the way we trigger events through mouse click bdlclick etc 
// the same way we can also trigger events through keyboard 
// such as pressing any arrow key or trigger event by releasing the key etc

// we also have a defualt argument in callback when we are triggering any event 
// you can name it event or e its up to you 
// html.css

// let btn = document.querySelector("button");

// btn.addEventListener("click", function (event) {
//     console.log(event);
//     console.log("hello there");
    
// })
// btn.addEventListener("dblclick", function (event) {
//     console.log(event);
//     console.log("hello there");
    
// })
// by consoling the event you can get access to all the properties of the event such as event type etc

//  now example : for keyboard events such as keyup keydown keypress etc you can check more on MDN but these are most used keys

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(e) {  
//     console.log("event triggered");
    
// })

// e.g-

// let inp = document.querySelector("input");

// inp.addEventListener("keyup", function(e) {
//     console.log(e);
//     console.log(e.code);
//     console.log(e.key);   
//     console.log("event triggered");
    
// })
// by consoling "e" you can get access to all the properties of the event such as event type code key etc
// this will also show you what you clicked etc

// how does the default event argument works 

// we have 2 special properties in the keyboard event which are code and key

// key: this tell us which key is visible on the screen such as for space it shows " " because a space " " is visible on the screen for semicolon it shows ";" because ";" is shown on the screen

// code: whereas the code give us the code of the particular key such as for "a" it returns "a" for space " " it returns "space" for semicolon it returns "semicolon"

// example : moving a character

// let character = document.querySelector("#character");

// character.addEventListener("keyup", function (e) {
    
//     if(e.code == "ArrowUp"){
//         console.log(e.code);
//         console.log("character moving forward");
        
//     }else if(e.code == "ArrowDown"){
//         console.log(e.code);
//         console.log("character moving backwards");
        
//     }else if(e.code == "ArrowLeft"){
//         console.log(e.code);
//         console.log("character moving to left");
        
//     }else if(e.code == "ArrowRight"){
//         console.log(e.code);
//         console.log("character moving to right");
//     }
    
// })

// e.g 2 - with a moving div

// let character = document.querySelector("#character");

// let div = document.querySelector("div");

// character.addEventListener("keyup", function (e) {
    
//     if(e.code == "ArrowUp"){
//         div.style.marginBottom = "300px"

//     }else if(e.code == "ArrowDown"){
//         div.style.marginTop = "300px"
        
//     }else if(e.code == "ArrowLeft"){
//         div.style.marginRight = "300px"

//     }else if(e.code == "ArrowRight"){
//         div.style.marginLeft = "300px"
//     }
    
// })



// ***** From Events ******
// ************************

// the froms that we create in HTML we can also apply many events on that 
// example :
// html,css

// let form = document.querySelector("form");

// form.addEventListener("submit", function () {
//     alert("form submitted!")
// })
// this will take us to /action URL on submit, submit is an event which is used for forms

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     alert("form submitted!")
// })

// we have event argument which is preventDefault(), it is a method which prevent us to move to that URL which is defined in the form "/actoin"
// this will stop the defualt action which is to move to that URL "/action"


// ***** Extracting Data from Form ******
// **************************************

// html,css

// now how do we extract data from form

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");

//     console.log(`username = ${user.value}`);
//     console.log(`userpass = ${pass.value}`);

//     console.dir(form); // to get more properties of form object check this 
    
// })
// now to get the innerText of the input we have to write input.value instead of input.innerText
// the follwing method to access value in the form is used more then the querySelector(), and it is used when we have many elements
// without the following method we have to give each element an ID to access it 
// we know that "this" in addEventListener() is the element on which we are applying addEventListener()

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     let user = this.elements[0].value;
//     let pass = this.elements[1].value;

//     console.log(`username = ${user}`);
//     console.log(`userpass = ${pass}`);

//     console.dir(form); // to get more properties of form object check this 
//     console.dir(form.elements); // this is the HTMl elements collection and its a property of form 
//     console.log(form.elements[0]); // element accessed
//     console.log(form.elements[2]);
   
// })


// ****** More important Events *******
// ************************************

// html,css

// 1- change event :
// the change event occurs when the value of an element has been changed (only works on input, textarea and select elements)
// this trackes the change between final and inital value

// 2- input event :
// the input event fires when the value of and input, textarea and select has been changed

// example :

// change event 
// gives us final value

// let inp = document.querySelector("input");

// inp.addEventListener("change", function () {

//     let value = this.value;
//     console.log(value);
    
// })

// input event 
// gives us every value we enter 

// let inp = document.querySelector("input");

// inp.addEventListener("input", function () {

//     let value = this.value;
//     console.log(value);
    
// })

// Activity :
// make text editor 

// let inp = document.querySelector("input");
// let p = document.querySelector("p");

// inp.addEventListener("input", function () {
//     p.innerText = this.value;
// })


// ***** Event bubbling ******
// ***************************

// when we create different events for for nested elements then bubbling is caused, by bubbling i mean that if i click "p" inside a "div" the "div" will also be clicked so to stop this we use an event method know as;

// event.stopPropagation();   // event method

// example :

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function () {
//     console.log("Div clicked");
// })

// ul.addEventListener("click", function () {
//     console.log("ul clicked");
// })

// for(li of lis) {
//     li.addEventListener("click", function () {
//         console.log("li clicked");
//     })
// }

// in the above code event bubbling is occured because if I click ul the div is also clicked and if I click lis then the ul and div both are clicked so to stop this event.stopPropagation() method can be used

// example : 

// method-1

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function (event) {
//     event.stopPropagation()
//     console.log("Div clicked");
// })

// ul.addEventListener("click", function (event) {
//     event.stopPropagation()
//     console.log("ul clicked");
// })

// for(li of lis) {
//     li.addEventListener("click", function (event) {
//         event.stopPropagation()
//         console.log("li clicked");
//     })
// }

// method-2

// function SP () {
//     event.stopPropagation()
// }

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function () {
//     SP();
//     console.log("Div clicked");
// })

// ul.addEventListener("click", function () {
//     SP();
//     console.log("ul clicked");
// })

// for(li of lis) {
//     li.addEventListener("click", function () {
//         SP();
//         console.log("li clicked");
//     })
// }
