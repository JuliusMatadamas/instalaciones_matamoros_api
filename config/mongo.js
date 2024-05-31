require("dotenv").config();
const mongoose = require('mongoose');

const dbConnection = () => {
    const DB_URL = process.env.MONGODB_URL;
    mongoose.connect(DB_URL).then(() => {
        console.log(`Connected to MongoDB`);
    }).catch(err => console.error(err));
}

module.exports = dbConnection;