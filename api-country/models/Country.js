const mongoose = require("mongoose");

const Country = new mongoose.Schema({
    code:{
        type: String,
        required: true,
        trim: true
    },
    name:{
        type: String,
        required: true,
        trim: true
    },
    continent:{
        type: String,
        required: true,
        trim: true
    },
    capital:{
        type: String,
        required: true,
        trim: true
    },
    language:{
        type: String,
        required: true,
        trim: true
    },
    currency:{
        type: String,
        required: true,
        trim: true
    },
    flag:{
        type: String,
        required: true,
        trim: true
    },
    photos:{
        type: [String],
        required: true,
        trim: true
    }
});

module.exports = mongoose.model("Country", Country);