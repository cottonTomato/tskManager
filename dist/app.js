"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.listen(process.env.PORT, function () {
    console.log(`Server Listininga at ${process.env.PORT}`);
});
