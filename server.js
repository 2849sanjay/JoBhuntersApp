const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const serverConfig = require('./configs/server.config');
const dbConfig = require('./configs/db.config');
const User = require('./models/user.model');
const bcrypt = require("bcryptjs");
const constants = require("./utils/constants");

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(dbConfig.DB_URL, async () => {
    console.log("MongoDB Connected");



await User.collection.drop();
    if (User === null) {
        // create the Admin user
        const user = await User.create({
            name: "SanjayVerma",
            userId: "admin",
            password: bcrypt.hashSync("Welcome", 8),
            email: "sanjay2849yahoo.in",
            userType: constants.userType.admin
        })
        console.log("admin created", user);
    }
})

app.listen(serverConfig.PORT, () => {
    console.log("Application has started");
})
