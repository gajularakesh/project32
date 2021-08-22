const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    userID: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    hotelID: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hotels' }],
    Indate : {
        type: String,
        required: true
    },
    Outdate : {
        type: String,
        required: true
    },
    Rooms : {
        type: Number,
        required: true
    },
    Amount : {
        type: Number,
        required: true
    },
    PaymentID : {
        type: String,
        required: true
    },
    PaymentStatus : {
        type: Boolean,
        required:true
    }
}
)

module.exports = mongoose.model("Booking", BookingSchema);