const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    teacher:{
        type: String,
        required: true
    },
    subject:{
        type: String,
        required: true
    },
    district:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },

    whatsapp:{
        type: String,
        required: true
    },
    specialty:{
        type: array,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('teacher', teacherSchema);
