const mongoose = require("mongoose")
const EarringsSchema = mongoose.Schema({
    
    material: {
        type:String,
        required: true,
        minlength: 3,
        maxlength: 30,

},
    style:{
        type:String,
        validate: {
            validator: function(value) {
              // Use a regular expression to validate the style attribute
              return /^[a-zA-Z0-9]+$/.test(value);
            },
            message: 'Style must only contain alphanumeric characters',
          },


    },
    price: {
        type: Number,
        required: true,
        max:1000,
        min:5
    } 
})
module.exports = mongoose.model("Earrings", EarringsSchema)