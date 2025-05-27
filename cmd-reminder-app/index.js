const {stdin, stdout} = require('process');
const readline = require('readline');



const rl = readline.createInterface({
    input: stdin,
    output: stdout
});


console.log('Welcome to the reminder app');

rl.question('Enter the reminder message: ', (message) => {
    if (!message) {
        console.log('Message cannot be empty');
        process.exit(1);
    }
    rl.question('Enter the time in seconds: ', (time) => {
        time = Number(time);
        if (time <= 0) {
                console.warn('Time cannot be less than 0');
                process.exit(1);
            }
        rl.question('Enter the method you want to use for scheduling (callback/promise/async): ', (method) => {
            // method = method.toLowerCase();
            // if ((method == 'callback' || method == 'promise' || method == 'async')) {
            //     console.log(`${method} is not valid.\nThe method should be one of [callback/promise/async]`);
            //     process.exit();
            // }
            console.log(`\nYou will be reminded after ${time} seconds\n`);
            
            
            // userInput = {message, time, method};
            // console.log(time);
            
            switch(method) {
                case 'callback': useCallbackMethod(message, time, (msg) => {
                    console.log('**************************************');
                    console.log(`REMINDER: ${message}`);
                    console.log('**************************************');
                }); 
                    break;

                case 'promise': 
                    usePromiseMethod(message, time).then((msg) => {
                    console.log('**************************************');
                    console.log(`REMINDER: ${message}`);
                    console.log('**************************************');
                    });
                    break;
                case 'async': useAsyncMethod(message, time);
                    break; 
            }

            rl.close()
        })
    })
});

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

    console.log('**************************************');
    console.log(`REMINDER: ${res}`);
    console.log('**************************************');
}