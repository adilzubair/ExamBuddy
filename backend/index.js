require('dotenv').config();
const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// IMPORTANT: Set your SendGrid API Key in your environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Root route
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Import and use routes
const emailRoutes = require('./routes/email');
const uploadRoutes = require('./routes/upload');
app.use('/api', emailRoutes);
app.use('/api', uploadRoutes);

// Start server only if not in test environment or if this file is run directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
}

module.exports = app; // Export the app for testing
