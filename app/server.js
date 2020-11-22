'use strict';

const express = require('express');

// константы
const port = 8080;
const host = '0.0.0.0';
const one = 1;
// приложение
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World from node1');
});

app.listen(port, host);
console.log(`running on http://${host}:${port}`);
