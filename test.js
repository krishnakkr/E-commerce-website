const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first name: ', (a) => {
    rl.question('Enter the second name: ', (b) => {
        console.log(`Hello ${a}`);
        console.log(`Hello ${b}`);
        rl.close();
    });
});
