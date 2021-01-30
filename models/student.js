const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema({
    firstname: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    }
}, { 
    timestamps: true, 
    versionKey: false 
})

const student = mongoose.model("Student", studentSchema.index({ 
    firstname: "text", 
    lastname: "text", 
    timestamps: 1 
}))

exports.Student = student;