const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/login', (req, res) => {
    res.send('<h1>Login to app</h1>');
})

app.listen(PORT, () => {
    console.log('Listneing port 3000');
});