const os = require('os');
const readline = require('readline');
const {stdin, stdout} = require('process')

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

console.log('Choose your action:-');
console.log('1. Add a new note');
console.log('2. View all Notes');
console.log('3. Edit a note');
console.log('4. Delete a note');
console.log('5. Exit Application')

rl.question('Enter your option(1/2/3/4/5): ', (ans) => {
    switch(ans) {
        case 1: addNewNote();
            break;
        case 2: viewAll();
            break;
        case 3: editNote();
            break;
        case 4: deleteNote();
            break;
        case 5: process.exit()
    }
});


console.log('\nSystem details:');
console.log('OS: ' + os.platform());
console.log('Free memory available: ' + os.freemem());
console.log('Total Uptime: ' + os.uptime());
console.log('\n*********************************************\n');


function addNewNote() {
    console.log('');
    rl.question('')
}