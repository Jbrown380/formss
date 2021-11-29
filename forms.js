

let todo = "";
const todoField = document.querySelector("#todoField")

document.querySelector("form").addEventListener("submit", function(event) {
     event.preventDefault();

todo = todoField.value;
let template =
`
<ul>the todo list</ul>
<li>${todo}</li>
`;
})
let todo = [];
const todoField = document.querySelector("#todoField")
const theSection = document.querySelector("section")


document.querySelector(`form`).addEventListener("submit", function(event) {
       event.preventDefault();
       todo = todoField.value;
     let template =
     `
     <ul>Todo</ul>
    <li>${todo}</li>
    `;
 theSection.innerHTML = template;
    
var liEl = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < liEl.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild
    template = todoField;
    }
   })   

