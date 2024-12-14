import Booking from '../model/bookingModel.js';
import Package from '../model/packageModel.js';

export const createBooking = async (req, res) => {
    const { packageId, customerName, email, phone, numberOfTravelers, specialRequests } = req.body;

    try {
        const selectedPackage = await Package.findOne({ id: packageId });
        if (!selectedPackage) {
            return res.status(404).json({ message: 'Package not found' });
        }

        const totalPrice = selectedPackage.price * numberOfTravelers;

        const newBooking = new Booking({
            packageId,
            customerName,
            email,
            phone,
            numberOfTravelers,
            specialRequests,
            totalPrice
        });

        await newBooking.save();
        res.status(201).json({ message: 'Booking successfully created', booking: newBooking });
    } catch (err) {
        res.status(500).json({ message: 'Error creating booking', error: err.message });
    }
};
