let tasks = [];

// add a new task
function addTask(taskName) {
  const task = {
    id: Date.now(),
    name: taskName,
    Completed: false,
  };

  task.push(task);
  renderTasks();
}
// remove or delete a task by its id

function removeTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);
  renderTasks();
}

//  function that allows switching between two states or options, often represented by a button
function toggleTask(taskId) {
  tasks = tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
}

// Renders the tasks to the UI.
function renderTasks() {
  const taskList = document.getElementById(taskList);
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.name;
    li.className = task.completed ? "completed" : "";

    li.addEventListener("click", () => toggleTask(task.id));

    // Create delete button for each task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      removeTask(task.id);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

//event listener for adding a new task

document.getElementById("addTaskBtn").addEventListener("click", () => {
  const taskInput = document.getElementById("taskInput");
  const taskName = taskInput.ariaValueMax.trim();

  if (taskName) {
    addTask(taskName);
    taskInput.value = "";
  } else {
    alert("Please enter a task name.");
  }
});
