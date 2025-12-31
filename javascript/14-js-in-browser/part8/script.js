//example 1

let hold = document.getElementById("changeTextButton");
console.log(hold);

//if you call arrow function then it will point to global object 'window'
hold.addEventListener("click", function () {
  //it will print who is calling it.
  console.log(this);
  let para = document.getElementById("myParagraph");
  console.log(para.textContent);
  para.textContent = "This para is changed!";
});

//example 2
//HTML <--> browser <--> C++ <---> DOM Tree
let highlighter = document.getElementById("highlightFirstCity");
highlighter.addEventListener("click", function () {
  let list = document.getElementById("citiesList");
  list.firstElementChild.classList.add("highlight");
});

//example 3
let btn3 = document.getElementById("changeOrder");
btn3.addEventListener("click", function () {
  let order = document.getElementById("coffeeType");
  order.textContent = "Espresso";
});

//example 4
document.getElementById("addNewItem").addEventListener("click",
  function(){
    let newItem = document.createElement('li');
    newItem.textContent = "eggs";
    document.getElementById("shoppingList").appendChild(newItem)
  }
);

//example 5
document.getElementById("removeLastTask").addEventListener("click",
  function(){
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove()
  }
)

//example 6
document.getElementById("clickMeButton").addEventListener("click",
  function(){
    alert('chaicode')
  }
)

//example 7
document.getElementById("teaList").addEventListener('click', 
  function(event){
    console.log(event)
    if(event.target && event.target.matches(".teaItem")){
      alert("You selected: "+ event.target.textContent)
    }
  }
)

//example 8
document.getElementById("feedbackForm").addEventListener('submit',
  function(event){
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    document.getElementById("feedbackDisplay").textContent = feedback
  }
)

// example 9
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('domStatus').textContent = "DOM fully loaded"
})

//example 10

document.getElementById("toggleHighlight").addEventListener('click',
  function(){
    let descText = document.getElementById('descriptionText')
    descText.classList.toggle('highlight')
  }
)