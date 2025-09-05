const mongoose = require('mongoose');
require('dotenv').config(); // Load .env variables

const mongoURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.21iry.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(mongoURI);

const todoSchema = mongoose.Schema({
    title: String,
    desc: String,
    completed: {
        type: Boolean,
        default: false
    },
    date: { type: Date, default: Date.now }
});

const todo = mongoose.model('todo', todoSchema);

module.exports = { todo };
