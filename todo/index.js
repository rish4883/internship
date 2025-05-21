const addBtn = document.getElementById("addTask")

// Function to add a new task to the list (added as an event listener)
function addNewTask(taskDetails) {
    const taskList = document.querySelector(".taskList")
    const task = document.createElement("div")
    task.className = "task"

    const text = document.createElement("div")
    text.textContent = taskDetails

    const btn = document.createElement("button")
    btn.textContent = "x"
    btn.className = "remove"

    task.appendChild(text)
    task.appendChild(btn)

    taskList.appendChild(task)
}

// add listener to the button to add a new task
addBtn.addEventListener("click", () => {
    const input = document.getElementById("inputTask")
    let newTask = input.value
    console.log(newTask)
    addNewTask(newTask)
    input.value = ''
})
