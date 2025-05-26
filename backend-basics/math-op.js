// const { stdout, stdin } = require("process");
// const readline = require("readline");

// console.log(__filename);


// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     return a / b;
// }

// const rl = readline.createInterface({
//     input: stdin,
//     output: stdout
// });

// rl.question("Enter two nums: ", (answer) => {
//     const ip = answer.split(' ');
//     let a = Number(ip[0]);
//     let b = Number(ip[1]);
//     console.log(`${a} + ${b} = ${add(a, b)}`);
//     console.log(`${a} - ${b} = ${subtract(a, b)}`);
//     console.log(`${a} * ${b} = ${multiply(a, b)}`);
//     console.log(`${a} / ${b} = ${divide(a, b)}`);
//     rl.close()
// });



const { log } = require('console');
const fs = require('fs');
// async
// fs.readFile(`${__dirname}/text.txt`, 'utf8', (err,data) => {
//     if(err) throw err
//     console.log(data);
    
// });

// sync
// const data = fs.readFileSync(`${__dirname}/text.txt`, 'utf8');
// console.log(data);


// fs.writeFile(`${__dirname}/texty.txt`, 'new line added', (err) => {
//     if (err) throw err
//     console.log('file written');
    
// })

