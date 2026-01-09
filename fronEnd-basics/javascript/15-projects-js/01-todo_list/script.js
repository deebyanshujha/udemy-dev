document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => {
    renderTasks(task);
  });
  addTaskButton.addEventListener("click", () => {
    const task = todoInput.value.trim();
    if (task === "") {
      return;
    }
    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    tasks.push(newTask);
    saveTasks();
    renderTasks(newTask);
    todoInput.value = ""; //clear input
    console.log(tasks);
  });

  function renderTasks(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    li.innerHTML = `
        <span>${task.text}</span>
        <button>delete</button>
    `;
    todoList.appendChild(li);
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTasks();
    });
    // 👉 This is the key part
    // Normally, events in JavaScript bubble up
    // That means:
    // Click button → click <li> → click parent <ul> → click document
    // stopPropagation() stops the event right there
    // So the click will NOT trigger any click handlers on parent elements
    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation(); //prevent toggle from firing
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTasks();
    });
  }

  //handling local storage :
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
