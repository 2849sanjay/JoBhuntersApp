
const mongoose = require("mongoose");
const constants = require("../utils/constants");


const companySchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required:true,
        default: verified
    },
    verified : {
        type: String,
        default: constants.verification.notVerified
    },
    jobs_posted: {
        type: [mongoose.SchemaType.Object_Id],
        ref: "job"
        
    },
    createAt: {
        type: Date,
        default: () => {
            return Date.now()
        }
    },
    updatedAt: {
        type: Date,
        default: () => {
            return Date.now()
        }
    }
})
module.export = mongoose.model("Company", companySchema);