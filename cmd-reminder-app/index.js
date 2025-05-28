const {stdin, stdout} = require('process');
const readline = require('readline');
const eventEmitter = require('node:events');

const emitter = new eventEmitter();

emitter.on('reminder', (msg) => {
    console.log('**************************************');
    console.log(`REMINDER: ${msg}`);
    console.log('**************************************');
    process.exit(0)
});



const rl = readline.createInterface({
    input: stdin,
    output: stdout
});


console.log('Welcome to the reminder app');

let message, time, method;

function askMessage() {
    rl.question('Enter the reminder message: ', (input) => {
        if (!input.trim()) {
            console.log('Message cannot be empty.');
            return askMessage();
        }
        message = input.trim();
        askTime();
    });
}

function askTime() {
    rl.question('Enter the time in seconds: ', (input) => {
        const num = Number(input);
        if (isNaN(num) || num <= 0) {
            console.log('Time must be a number greater than 0.');
            return askTime();
        }
        time = num;
        askMethod();
    });
}

function askMethod() {
    rl.question('Enter the method you want to use for scheduling (callback/promise/async): ', (input) => {
        const val = input.trim().toLowerCase();
        if (!(val == 'callback' || val == 'promise' || val == 'async')) {
            console.log('Invalid method. Use one of: callback, promise, async.');
            return askMethod();
        }
        method = val;
        rl.close();
        scheduleReminder();
    });
}

askMessage();

function scheduleReminder() {
    console.log(`\nYou will be reminded in ${time} seconds using "${method}" method.\n`);

    switch (method) {
        case 'callback':
            useCallbackMethod(message, time, (msg) => emitter.emit('reminder', msg));
            break;
        case 'promise':
            usePromiseMethod(message, time).then((msg) => emitter.emit('reminder', msg));
            break;
        case 'async':
            useAsyncMethod(message, time);
            break;
    }
}




function useCallbackMethod(message, time, callback) {
    console.log('Using callback...\n');
    setTimeout(() => {
        callback(message);
    }, time * 1000)
}

function usePromiseMethod(message, time) {
    console.log('Using Promise...\n');
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(message);
        }, time * 1000)
    });
}

async function useAsyncMethod(message, time) {
    console.log('Using Async...\n');
    // console.log(time + '...' + typeof(time));
    
    const res = await usePromiseMethod(message, time);

    emitter.emit('reminder', res)
}
