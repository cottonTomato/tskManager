import express = require('express');
// import express from 'express';
import tasks = require('./routes/tasks');

const app = express();



app.listen(process.env.PORT, function () {
    console.log(`Server Listininga at ${process.env.PORT}`);
});