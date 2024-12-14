import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    availableDates: {
        type: [String],  // Array of dates
        required: true
    },
    images: {
        type: [String],  // Array of image URLs
        required: true
    }
});

const Package = mongoose.model('Package', packageSchema);

export default Package;
