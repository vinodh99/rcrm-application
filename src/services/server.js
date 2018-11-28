var EmployeeData = require('./models/message-model');
import { Mongoose } from 'mongoose';
var express = require('express');
var app= express();
var bodyParser = require('body-parser');

Mongoose.connect('mongodb://localhost:27017/employeeData');

app.post('./api/employeeData', (req,res) => {
    const doc = new EmployeeData ({message: Request.body.message})
    doc.save();
});

