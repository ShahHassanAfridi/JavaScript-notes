let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function (event) {
   
    if(inp.value == ""){
        alert("Please enter tasak first")
    }

    let task = document.createElement("li");
    task.innerText = inp.value;
    ul.appendChild(task)

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add(".delete")
    task.appendChild(delBtn);

    inp.value = "";
    
})

// now all of the above code/events will not work for the new elements so here we will be using event delegation
// in event delegation we will use our bubbling property

ul.addEventListener("click", function (event) {
    if(event.target.nodeName == "BUTTON") {
        let lisTask = event.target.parentElement;
        lisTask.remove();
    }
})