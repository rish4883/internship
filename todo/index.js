const addBtn = document.getElementById("addTask")

// Function to add a new task to the list (added as an event listener)
function addNewTask(taskDetails) {
    const taskList = document.querySelector(".taskList")
    const task = document.createElement("div")
    task.className = "task"

    const check = document.createElement("input")
    check.setAttribute("type", "checkbox")
    check.addEventListener("click", (e) => {
        setTimeout(() => {
            e.target.parentElement.remove()
        }, 300)
    })

    const text = document.createElement("div")
    text.textContent = taskDetails
    text.className = "taskDetails"

    const icons = document.createElement("div")
    icons.className = "icons"

    const editIcon = document.createElement("i")
    editIcon.classList.add("fa-solid", "fa-pen")
    editIcon.addEventListener("click", editTask)

    // create a button for each task which removes itself when clicked
    const closeIcon = document.createElement("i")
    closeIcon.classList.add("fa-solid", "fa-xmark") 
    closeIcon.addEventListener("click", removeTask)

    icons.appendChild(editIcon)
    icons.appendChild(closeIcon)
    task.appendChild(check)
    task.appendChild(text)
    task.appendChild(icons)

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

// to remove the button from the list
function removeTask(event) {
    const taskToRemove = event.target.parentElement.parentElement
    // const taskList = document.querySelector('.taskList')
    taskToRemove.remove()
}


function editTask(event) {
    const text = event.target.parentElement.parentElement.querySelector(":nth-child(2)")
    text.setAttribute("contenteditable", "true")
    text.focus()

    const saveIcon = document.createElement("i")
    saveIcon.classList.add("fa-solid", "fa-check")

    event.target.parentElement.insertBefore(saveIcon, event.target.parentElement.firstChild)

    saveIcon.addEventListener("click", () => {
        saveIcon.remove()
        text.setAttribute("contenteditable", "false")
    })
}