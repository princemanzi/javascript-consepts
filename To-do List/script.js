

let tasks = []


// add a new task 
function addTask(taskName) {
    const task = {
        id:Date.now(),
        name:taskName,
        Completed: false
    };
    
    task.push(task)
    renderTasks();
}
// remove or delete a task by its id

function removeTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId)
    renderTasks();
}

//  function that allows switching between two states or options, often represented by a button
function toggleTask(taskId) {
    tasks = tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task);
    renderTasks();
}


// Renders the tasks to the UI.
