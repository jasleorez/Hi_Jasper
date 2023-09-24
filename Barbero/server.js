const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/barbero', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define a MongoDB schema and model
const AppointmentSchema = new mongoose.Schema({
    date: Date,
    time: String,
    service: String
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Define API routes
app.post('/api/appointments', async (req, res) => {
    try {
        const appointment = new Appointment(req.body);
        await appointment.save();
        res.status(201).json(appointment);
    } catch (error) {
        res.status(500).json({ error: 'Failed to book appointment.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
