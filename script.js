var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var span = document.querySelectorAll("span");
var item = document.querySelectorAll("li");


// Create new list
function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    var newSpan = document.createElement("span");

    li.appendChild(newSpan);
    newSpan.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    createDeleteBtn(li);
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


// Line-through
ul.addEventListener("click", function (e) {
    if (e.target.tagName.toLowerCase() === "span") {
        e.target.classList.toggle("done");
    }
});


// Delete button
for (var i = 0; i < item.length; i++) {
    createDeleteBtn(item[i]);
}

function createDeleteBtn(e) {
    var deletebtn = document.createElement("button");
    var text = document.createTextNode("✕");
    deletebtn.appendChild(text);
    e.appendChild(deletebtn);
    deletebtn.onclick = deleteItem;

    deletebtn.classList.add("x");
}

function deleteItem() {
    this.parentNode.remove();
}