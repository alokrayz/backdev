require('dotenv').config(); // yha hmne dotenv ko require krke config method call krliya jisse .env file m jo bhi variables honge wo process.env m aa jayenge
const express = require('express'); // yha hmne object bna liya express
// import express from 'express';

const app = express()  // yha hmne express ko call krke app m store kr liya
const port = 4000  // port number jaha hmara server chalega

app.get('/', (req, res) => {   // yha hmne ek route bnaya jaha '/' m request aayegi to hm hello world response bhjenge
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Welcome to Twitter');
})

app.get('/facebook', (req, res) => {
    res.send('Welcome to Facebook');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})