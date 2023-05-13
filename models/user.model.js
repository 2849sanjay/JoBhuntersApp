const mongoose = require('mongoose');
const constants = require('../utils/constants');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        minLength: 10,
        required: true
    },
    userType: {
        type: String,
        required: true,
        default: constants.userType.student

    },
    jobs_applied: {
        type: [mongoose.SchemaType.ObjectId],
        ref: "Job"
    },
    createdAt: {
        type: Date,
        emutable: true,
        default: () => {
            return Date.now()
        }
    },
    updatedAt: {
        type: Date,
        default: () => {
            return Date.now();
        }
    }
})
module.exports = mongoose.model("User", userSchema)