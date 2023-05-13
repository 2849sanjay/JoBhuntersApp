
const mongoose = require("mongoose");
const constants = require("../utils/constants");



const jobsSchema = new mongoose.Schema({

    title: {
        type: String,
        reuired: true
    },
    Desciption: {
        type: String,
        required: true
    },
    posted_by_company: {
        type: [mongoose.SchemaType.ObjectId]
    
    },
    applicants:{
        type: [mongoose.SchemaType.ObjectId]
    },
    jobStatus:{
        type: String,
        default: constants.jobStatus.active
    },
    createAt: {
        type: Date,
        immutable: true,
        default: () => {
            return Date.now();
        }
    },
    updatedAt : {
type: Date,
default: ()=>{
    return Date.now()
}
    }

})
module.exports = mongoose.model("Jobs",jobsSchema)