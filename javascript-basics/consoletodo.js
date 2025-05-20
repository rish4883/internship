const prompt = require('prompt-sync')();  // External NPM package

const toDoList = [];

function displayToDoList() {
    toDoList.forEach((task) => {
        console.log('- ' + task);
    })
}

while (true) {
    let task = prompt("Add a new task: ");
    toDoList.push(task)
    console.log('\n****************************************\nTasks to complete: ');
    displayToDoList()
    console.log("****************************************\n");
    
    let run = prompt("Continue? (yes/no) ")
    if (run == 'no')
        break;
}
