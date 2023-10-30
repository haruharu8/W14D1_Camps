const mongoose = require("mongoose");
const { Schema } = mongoose // ObjectId is a special data type we have to import

const bootcampSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    img: String,
stateId: Schema.Types.ObjectId
},
{
    timestamps: true
})
//  Bootcamp points to "bootcamps" collection
const Bootcamp = mongoose.model('bootcamp', bootcampSchema)
module.exports= Bootcamp;