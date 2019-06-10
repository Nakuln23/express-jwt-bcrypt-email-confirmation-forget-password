const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');
const dotenv = require('dotenv')
dotenv.config();
 
// SendGrid api key 
const options = {

    auth: {
        api_key: process.env.SENDGRID_API_KEY 
    }
}

const transporter = nodemailer.createTransport(sendGridTransport(options));



module.exports = transporter;