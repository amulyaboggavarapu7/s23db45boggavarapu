const mongoose = require("mongoose")
const EarringsSchema = mongoose.Schema({
    
    material: String,
    price: Number,
    style: String
})
module.exports = mongoose.model("Earrings", EarringsSchema)