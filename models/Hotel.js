
const {Schema, model, Types: {ObjectId}} = require('mongoose');

const URL_PATTERN = /^https?:\/\/.+$/i;

const hotelSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: [4, 'The hotel name must be at least 4 characters long!']
    },
    city: {
        type: String,
        required: true,
        minlength: [3, 'The city name must be at least 3 characters long!']
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: (value)=>URL_PATTERN.test(value),
            message: "Image url is not valid!"
        }
    },
    rooms: {
        type: Number,
        required: true,
        min: [1, "You cannot set a negative number of rooms!"],
        max: [100, "You reached that maximum number of rooms that you can set! Please type a number below 100"]
    },
    booking: {
        type: [ObjectId],
        default: []
    },
    owner: {
        type: String,
        required: true
    }
})

const Hotel = model('Hotel', hotelSchema)

module.exports = Hotel