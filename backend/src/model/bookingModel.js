import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    packageId: { type: String, required: true },
    customerName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    numberOfTravelers: { type: Number, required: true },
    specialRequests: { type: String, default: "" },
    totalPrice: { type: Number, required: true },
    bookingDate: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
