import {config} from 'dotenv';
config();
import express from 'express';
import packages from './routes/packages.js'
import connectDB from './configs/db.js';
const app = express();
connectDB();


app.use('/package' , packages);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

