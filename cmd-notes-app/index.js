const os = require('os');
const fs = require('fs')
const readline = require('readline');
const {stdin, stdout} = require('process')


function createInterface() {
    return readline.createInterface({
        input: stdin,
        output: stdout
    });
}

const noteFilePath =  `${__dirname}/notes.txt`;

// while(true) {
    const rl = createInterface();
    console.log('Choose your action:-');
    console.log('1. Add a new note');
    console.log('2. View all Notes');
    console.log('3. Edit a note');
    console.log('4. Delete a note');
    console.log('5. Exit Application')


    console.log('\nSystem details:');
    console.log('OS: ' + os.platform());
    console.log('Free memory available: ' + os.freemem());
    console.log('Total Uptime: ' + os.uptime());
    console.log('\n*********************************************\n');


    rl.question('Enter your option(1/2/3/4/5): ', (ans) => {
        console.log('\n');
        
        switch(ans) {
            case '1': addNewNote();
                break;
            case '2': viewAll();
                break;
            case '3': editNote();
                break;
            case '4': deleteNote();
                break;
            case '5': rl.close();
                break;
        }
    });
    // rl.close();
// }

function addNewNote() {
    rl.question('Enter Title of the note: ', (title) => {
        rl.question('Enter the note: ', (note) => {
            let fullNote = `${title} - ${note}\n`;
            fs.appendFileSync(noteFilePath, fullNote);
            rl.close();
        })
    });    
}

function viewAll() {
    console.log('Your notes:-');
    const notesData = fs.readFileSync(noteFilePath, 'utf8');
    const notes = notesData.split('\n');
    notes.splice(-1, 1)
    // console.log(notes);
    notes.forEach((note, index) => {
        // noteSeperated = note.split('-');
        console.log(`${index + 1}. ${note}`);
    });
    console.log('\n');
    rl.close();
    
}

function editNote() {
    rl.question('Enter the title of note to edit: ', (title) => {
        const notes = fs.readFileSync(noteFilePath, 'utf8').split('\n');

        let editIndex = notes.findIndex( (note, index) => {
            titleNote = note.split(' - ');
            if (titleNote[0] == title) {
                console.log(`"${note}"`);
                return true;
            }
        });
        
        if (editIndex == -1) {
            console.log('No such note exists.\n');
            rl.close();
            return;
        }
        
        const editNoteTitle = notes[editIndex].split(' - ')[0];
        rl.question(`Enter edited note\n${editNoteTitle} - `, (noteContent) => {
            notes[editIndex] = editNoteTitle + ' - ' + noteContent;
            fs.writeFileSync(noteFilePath, notes.join('\n'));
            rl.close();
        });
    });
}