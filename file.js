const add = document.getElementById("add");
add.addEventListener("click", e => {
  let value = document.querySelector("#newtask input").value;
  if (value.length == 0) {
    alert("Please enter a task");
    return false;
  }

  addTodoItem(value);
});


function addTodoItem(task) {
  let randomNo = Math.floor(Math.random() * 9999);
  let id = "task-" + randomNo;

  let html =
    '<div id="' +
    id +
    '" class="task"><span id="taskname">' +
    task +
    '</span><button class="delete" onclick="deleteItem(' +
    randomNo +
    ')" ><i class="fa fa-trash-alt">X</i></button></div>';

  document.querySelector("#tasks").innerHTML += html;
  document.querySelector("#newtask input").value = "";
}

function deleteItem(randomNo) {
  let id = "task-" + randomNo;
  document.getElementById(id).remove();
}