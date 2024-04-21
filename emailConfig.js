const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'kartikeymishracsjm@gmail.com',
    pass: process.env.EMAIL_PASSWORD,
  },
  debug: true,
});
transporter.verify(function (error, success) {
  if (error) {
    console.error('Error verifying transporter configuration:', error);
  } else {
    console.log('Transporter configuration is correct');
  }
});

module.exports = transporter;