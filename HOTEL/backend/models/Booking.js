const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    userId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    hotelId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hotels' }],
    Indate : {
        type: Date,
        required: true
    },
    Outdate : {
        type: Date,
        required: true
    },
    Payment : {
        type: Boolean,
        required:true
    }
}
)

module.exports = mongoose.model("Booking", BookingSchema);