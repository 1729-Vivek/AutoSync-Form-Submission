const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Create a new express application
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (replace 'your_mongodb_uri' with your actual MongoDB URI)
mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema and model for storing form data
const formDataSchema = new mongoose.Schema({
  name: String,
  email: String
});

const FormData = mongoose.model('FormData', formDataSchema);

// Route for handling form submissions
app.post('/api/submit', (req, res) => {
  const records = req.body;

  // Insert multiple records
  FormData.insertMany(records)
    .then(() => res.json({ message: 'Data received successfully' }))
    .catch(err => res.status(400).json({ error: err.message }));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
