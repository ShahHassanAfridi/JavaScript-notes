// ********** The DOM (document object model) ************
// *******************************************************

// The DOM (Document Object Model) is a programming interface for web documents. It represents the structure of an HTML or XML document as a tree of objects, where each node corresponds to an element, attribute, or text within the document 
// it allows us to manipulate/change webpage content (HTMl elements)
// now

// HTML:
{/* <body> 
    <div>
        <h1>
            Todo
        </h1>
    </div>
    <ul>
        <li>Gym</li>
        <li>Study</li>
        <li>Sports</li>
    </ul>
</body> */}

// all of the above are in document and all these are nodes 
// all HTMl CSS elements are nodes aswell
// but it becomes objects if we want to access them in javascript
// the document, body, div, h1, ul, li all these can be manipulated/cahnge through JS 

// HOW it works 

// to change html using JS there are 2 steps 
// 1- select image/heading/paragraph from the page you want to make changes to 
// 2- this step is to make the changes through JS

// we can console our document by writing console.dir(documnet) in the console
// then w will get to see all the things that are in document object
// there are some properties in document which we can access and manipulate e.g "all" property
// "all" has all html collection along with their key 

// practice in dom.html file

// now as we have made a simple document on dom.html 
// if we hover on key-8 which is h1 in the "all" it will highlight it 
// the reason all of the tags has key because they all are now object in DOM and we can change them by JS

// now how to access h1 and change it 
// write console.dir(documnet.all) in console and you will get all the collection of html tags 
// in the above line the documnet is object and "all" is its property
// now we know that h1 is on index 7, so to access it we will write console.dir(documnet.all[7])
// we have accessed h1 now h1 is also an object itself so we have to access its inner data which is its property
// so to access it simply write console.dir(documnet.all[7].innerText) and you will get "hey this is me hassan"
// now to change value just write documnet.all[7].innerText =" any value";
// and manipulation is done

// but after you refresh it the changes will undo because console window changes are limited till there, for perminant changes we have to write JS code 

// DOM 

// ********** SELECTING ELEMENTS ************
// ******************************************

// getElementById

// this is a method of document
// this will not return the html element, this will return the html element object form which is prepared in DOM
// syntax: documnet.getElementById(id)
// if the id doesnt exist then it will give us null or is not found

// now accessing my img through id using getElementById


// console.log( document.getElementById(myPhoto)); // this is null because JS is treating it as variable but its not a variable so we have to use "" to write id e.g,
//console.log(document.getElementById("myPhoto"));
// so what is retuen now is not a tag or element from html its an object 
// we can change img src and we can get access to few things such as src id class etc
// e.g
// just access the src and enter any other img link e.g document.all[8].src = "mew src";


// getElementByClassName

// same things can be done with class as well
// returns the element as an HTML collection or empty collection (if not found)
// e.g
// document.getElementsByClassName("bikes")[0] 
// note: we can use [] for index


// getElementByTagName

// returns the element as an HTML collection or empty collection (if not found)
// e.g
// console.log(document.getElementsByTagName("p")); // capital or small "p" both will work 
// we will get the P tag in an object form 


// querySelector

// they way we have methods we also have query selectors
// this is more used
// we can use also the selectors that we use in CSS
// syntax for tag id and class :
// document.querySelector('p');
// document.querySelector('#myPhoto'); // use #
// document.querySelector('.bikes');  // use .

// in case of class of  bikes it will match with all but it will give us the first img that the querySelector matches 
// querySelector gives us single value 
// and we have another selector which gives us all values which is in the comming topic

// optional
// console.dir(document.querySelector('.bikes')) // this is used to get it as an object 


// querySelectorAll

// this will give us all the values 
// e.g: now we can access all the bikes of bikes class
// console.dir(document.querySelectorAll('.bikes')); // in console NodeList means every individual object is a node


// ***** using properties and methods *****
// ****************************************

// innerText : shows the visible text contained in node. This does not recognaize tags will changing them in console

// textContent : shows all the full text 

// innerHTML : shows the full markup. And it recognizes tags when manipulating in console


// ***** Manipulating Attributes *********
// ****************************************

// we can directly manipulate attribites aswell
// we have multiple attributes such as: id, class, style, src in img  etc

// so to change attributes we have 2 methods

// 1- obj.getAttribute(attr) :

// this gives us specific attruibute value of an object, means we get to known that this attribute of this object has this value set 

// 2- obj.setAttribute(attr, val) :

// and if we want to change value for an attribute then we use setAttribute, in this we pass the attribute which value we will change and we also pass the value to which it should change 

// obj.getAttribute(attr) & obj.setAttribute(attr, val)
//  this are basically called getters and setters
// getters and setters is the set for 2 functions from which we can get and set the value 
// example:

// write in console :

// document.querySelector("img")
// let heroimg = document.querySelector("img")
// heroimg.getAttribute("id")
// heroimg.setAttribute("id", "hero")
// heroimg.getAttribute("id")

// example-2 :

//let heroimg = document.querySelector("img")
 
// you can do the same for img, just select img and setattr pass src and the img path

// the above code will get the img ID and will set another ID for it 
//**************************************************************************

// if we want to access the class of the hero img but id doesnt have a class so it will give us null 
// however we can setattr("class", "class-name") and like this it will have its class aswell

// let  heroIMG = document.getElementById("myPhoto");
// heroIMG.setAttribute("class", "Hero");
// document.getElementsByClassName("Hero");



// ***** Manipulating Style ***************
// ****************************************

// obj.style

// to manipulate style we can use obj.style property
// style it self is an object so you can check different properties in it
// by writing console.dir(document.querySelector("img").style) in the console
// in css we write e.g background-image but in JS we will write it in camel case ==> backgroundImage

// changing h1 background color and text color :
// document.querySelector("h1").style.backgroundColor = "blue"
// document.querySelector("h1").style.color = "red"

// changing all the <a> color inside <ul>

// let links = document.querySelectorAll(".box a");

// for (color of links){
//     color.style.color = "yellow";
// }

// // OR

// for (let i=0; i<links.length; i++){
//     links[i].style.backgroundColor = " blue";
// }


// with style property we can access inline styling and we cannot access CSS styling for confirmation you can check the style obj of any tag and there you can see that the color of the text is empty even if you have applied color through the CSS


// ************************************
// manuipulating style using classlist
// ************************************

// *****************************
// methods that we have in it :

// classList.add() to add new classes
// classList.remove() to remove classes 
// classList.contains() to check if class exists
// classList.toggel() to toggle between add and remove
// *****************************************************

// for every obj we can check its class lists e.g obj.classList
// there is a possibilty of an obj to have a single or multiple classes 

// checking if theres class on h1

// document.querySelector("h1").classList

// now checking for superman picture

// document.querySelector("img").classList // this will showld that the img has 2 classes 1-superman 2-hero

// now we can also manipulate these classes

// classList.add()
// we can use this method to add classes to classList
// for example :

// document.querySelector("img").classList.add("rounded")
// document.querySelector("img").classList

// now how do we make manipulation through classese, actually we will make classes and add css to it and we can add that class to any object so that the styling is applied

// classList.add() :
// ******************
// example : 
// adding classes for manipulation
// note: check CSS and its comments

// document.querySelector("img").classList.add("rounded", "green-border");

// classList.remove() :
// *********************
// example :
// removing rounded class

// document.querySelector("img").classList.remove("rounded");

// classList.contains() :
// **********************
// this will return true or false for the classes that are contain in an object
// example :

// console.log(document.querySelector("img").classList.contains("rounded")); // true/false


// classList.togggle() :
// **********************

// this works like no(0) & yes(1), if toggle is no it will make it yes and if its yes it will makeit no and this goes on 
// this works like fan  button if you press it once it will turn on and if its pressed again it will turn off and this continued untill and unless you dont stop
// example :

// document.querySelector("img").classList.toggle("rounded") // this was not there meaan no(0) so the toggle made it yes(1)
// document.querySelector("img").classList.toggle("rounded")// same for this, this was there meaan yes(1) so the toggle made it no(0)
// document.querySelector("img").classList.toggle("rounded")
// // OR
// document.querySelector("img").classList.toggle("green-border") // no so made it yes
// document.querySelector("img").classList.toggle("green-border") // yes so made it no
// document.querySelector("img").classList.toggle("green-border") // no so made it yes again


// ***** Navigation ******
// ***********************

// we can go from one element to another in JS using navigation
// there are 3 main properties of navigation which includes :

// parentElement
// children
// previousElemetSibbling / nextElementSibbling

// parentElemet example:

// document.querySelector("h4").parentElement.style.color = "gray"


// children example :
// document.querySelector("li").children // this prints all children of <li>
// document.querySelector("li").children[2].style.backgroundColor = "black" // use [] for index and then manipulate


// // previousElemetSibbling / nextElementSibbling examples :

// document.querySelector("h4").previousElementSibling.style.color = "red" // previous
// document.querySelector("h4").nextElementSibling.style.color = "red" // next


// we are doing all these changes by indirectly accessing that object but things will get complex ahead and then these methods will be used


// ***** Adding Elements ******
// ****************************

// we can add elements in document, elements such as p,h1-6,img etc using JS
// we use to manipulate changes to the existing elements but adding new elements is also a change and we can also do that
// to create new element in document we use document.createElement("p") 
// the createElement method is already with the document
// example :

// document.createElement("p");
// console.dir(document.createElement("p")); // we can also access all the properties of <p> which are empty because no value is assigned to <p> yet
// value assigned to new <p> created with createElement()
// let newP = document.createElement("p").innerText = "hi im new <p> just created :)";

// this newP is created on JS and document but its not visible on the document that is because we havent insert it in the document yet, so to insert it we use the following function

// ***** appendChild(element) ******
// *********************************

// appendChild is use to add element at the end of a parent element body
// for example : inserting a <p> in body

// let newP = document.createElement("p")
// newP.innerText = "hi im new p just created";
// let body = document.querySelector("body")
// body.appendChild(newP)

// like this we can insert an element in the document
// examle-2 : insering an img in the .box

// let image = document.createElement("img");
// image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT377KrALgL7ifY9ycUADTC2glsdg-qYeK3gQ&s";
// let box = document.querySelector(".box");
// box.appendChild(image);

// ***** append("") ******
// ***********************

// this is used to append something like stirng or new text to the element we target
// example : appending the img to the newP

// let newP = document.createElement("p")
// newP.innerText = "hi im new p just created";
// let body = document.querySelector("body")
// body.appendChild(newP)

// let image = document.createElement("img");
// image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT377KrALgL7ifY9ycUADTC2glsdg-qYeK3gQ&s";
// newP.append(image);

//  so we append the img into the newP using append()

// ***** prepend("") ******
// ************************

// this is same as append but append inserts the element in the last 
//  and prepend insert the element in the start
// example : 

// let newP = document.createElement("p")
// newP.innerText = "hi im new p just created";
// let body = document.querySelector("body").appendChild(newP)

// let image = document.createElement("img");
// image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT377KrALgL7ifY9ycUADTC2glsdg-qYeK3gQ&s";
// newP.prepend(image);


// ***** insertAdjacentElement(position, element) ******
// *****************************************************

// Parameters :
// position:

// A string representing the position relative to the targetElement; must match (case-insensitively) one of the following strings:

// 'beforebegin': Before the targetElement itself.
// 'afterbegin': Just inside the targetElement, before its first child.
// 'beforeend': Just inside the targetElement, after its last child.
// 'afterend': After the targetElement itself.

// applying now :

// beforebegin :

// let btn = document.createElement("button");
// btn.innerText = "insertAdjacentElement";
// let box = document.querySelector(".box");
// box.insertAdjacentElement("beforebegin", btn);

// afterbegin :

// let btn = document.createElement("button");
// btn.innerText = "insertAdjacentElement";
// let box = document.querySelector(".box");
// box.insertAdjacentElement("afterbegin", btn);

// beforeend :

// let btn = document.createElement("button");
// btn.innerText = "insertAdjacentElement";
// let box = document.querySelector(".box");
// box.insertAdjacentElement("beforeend", btn);

// afterend :

// let btn = document.createElement("button");
// btn.innerText = "insertAdjacentElement";
// let box = document.querySelector(".box");
// box.insertAdjacentElement("afterend", btn);


// ***** removing elements ******
// ******************************

// this works opposite of adding, it removes the elements
// we have 2 functions 

// 1- removeChild(element) :
// this is exactly as appendChild but it removes the child of a parent

// 2- remove(element) :
// this is exactly as append but it removes the element

// generally remove(element) is used more

// example : remove the .box child

// let btn = document.createElement("button");
// btn.innerText = "insertAdjacentElement";
// let box = document.querySelector(".box");
// box.insertAdjacentElement("beforeend", btn);

// // using removeChild() :

// box.removeChild(btn); // hence removed

// example : removing the btn directly 

// let btn = document.createElement("button");
// btn.innerText = "insertAdjacentElement";
// let box = document.querySelector(".box");
// box.insertAdjacentElement("beforeend", btn);

// // using remove() :

// btn.remove(); // hence removed

// example-2 : we can even remove the full body using remove()

// note: keep the remove parenthesis() empty
// let body = document.querySelector("body");
// body.remove()

// Practice excersie :

// note: make sure to comment out the html code before this exercise :)

// add the following elements to the container using only JS and DOM methods
// 1- a <p> with red text says "hey im red"
// 2- an <h3> with blue text that says "hey im blue h3"
// 3- a <div> with black border and yellow background color with following elements inside it 
// - another <h1> that says "im in div"
// - a <p> that says "me too!"

// let firstP = document.createElement("p");
// firstP.innerText = "hey im red";
// firstP.style.color = "red";

// document.querySelector("body").append(firstP);

// let firstH3 = document.createElement("h3");
// firstH3.innerText = "hey im blue h3";
// firstH3.style.color = "blue";

// document.querySelector("body").append(firstH3);

// let firstDiv = document.createElement("div");
// firstDiv.style.border = "3px solid black";
// firstDiv.style.backgroundColor = "yellow";

// document.querySelector("body").append(firstDiv);

// let divH1 = document.createElement("h1");
// divH1.innerText = "im in div";

// let divP = document.createElement("p");
// divP.innerText = "me too!";

// document.querySelector("div").append(divH1 ,divP);

