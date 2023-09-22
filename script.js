let todos = document.querySelector(".todos");
let form = document.querySelector("form");
let textInput = document.querySelector("#textInput");
let msg = document.querySelector(".msg");
let todoArr = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (textInput.value === "") {
    msg.textContent = "PLEASE ENTER TODO";
    msg.style.display = "block";
    msg.style.background = "red";
    setTimeout(() => {
      msg.style.display = "none";
    }, 3000);
  } else {
    let todo = {
      id: Math.random(),
      text: textInput.value,
      date: new Date().toDateString() + " | " + new Date().toLocaleTimeString(),
    };
    msg.textContent = "TODO ADDED SUCCESSFULLY";
    msg.style.display = "block";
    msg.style.background = "green";
    setTimeout(() => {
      msg.style.display = "none";
    }, 3000);
    todoArr.unshift(todo);
    displayTodo(todoArr);
    textInput.value = "";
  }
});

function displayTodo(arr) {
  let html = "";
  arr.forEach((x) => {
    html += `
          <div class='todo'>
              <span>
                  <h3>${x.text}</h3>
                  <small>${x.date}</small>
              </span>
              <button onclick=deleteTodo(${x.id})>DELETE</button>
          </div>
      `;
  });
  todos.innerHTML = html;
}

function deleteTodo(id) {
  let todoId = todoArr.filter((x) => x.id === id);
  todoArr.splice(todoArr.indexOf(todoId, 1));
  displayTodo(todoArr);
}

// POST
// PUT/PATCH
// GET
// DELETE
