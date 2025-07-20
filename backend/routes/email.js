const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post('/send-email', async (req, res) => {
  const { to, from, subject, html } = req.body;

  if (!to || !from || !subject || !html) {
    return res.status(400).json({ error: 'Missing required fields: to, from, subject, html' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(to)) {
    return res.status(400).json({ error: 'Invalid "to" email format.' });
  }

  if (from !== 'help.propease@gmail.com') {
    console.warn(`Suspicious 'from' email detected: ${from}`);
    return res.status(400).json({ error: 'Invalid "from" email address.' });
  }

  if (subject.length > 255) {
    return res.status(400).json({ error: 'Subject is too long.'});
  }
  if (html.length > 10000) {
    return res.status(400).json({ error: 'HTML content is too long.'});
  }

  const msg = { to, from, subject, html };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error.response ? error.response.body : error);
    let errorMessage = 'Failed to send email.';
    if (error.response && error.response.body && error.response.body.errors) {
        errorMessage = error.response.body.errors.map(err => err.message).join('; ');
    }
    res.status(500).json({ error: errorMessage });
  }
});

module.exports = router;
