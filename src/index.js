import fs from 'fs';
import sgMail from '@sendgrid/mail';
import { getEmailTemplateHtml } from './templates';

console.log('\n***********************************');
console.log('Welcome to react-mailer by playola!');
console.log('***********************************');

if (!process.env.SENDGRID_API_KEY) {
  console.error('Please review your SendGrid API key in "sendgrid.env" file.');
  console.log('\nThank you for using react-mailer :)');
  process.exit(0);
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

if (!process.env.TO || !process.env.FROM) {
  console.error('Please review the TO and FROM emails in "sendgrid.env" file.');
  console.log('\nThank you for using react-mailer :)');
  process.exit(0);
}
const type = 'welcome';
const to = process.env.TO;
const from = process.env.FROM;

console.log(`\nSending ${type} email to ${to} from ${from}...`);

// Compose the HTML, and generate the email template.
const emailTemplateHtml = getEmailTemplateHtml(to, from, type);

// Compose the SendGrid message, and send it.
const msg = {
  to,
  from,
  subject: 'Welcome to playola!',
  text: 'and easy to do anywhere, even with Node.js',
  html: emailTemplateHtml,
};
sgMail.send(msg);

console.log('Email sent successfully!');

// Generate HTML file with the sent email template.
try {
  console.log('\nGenerating HTML file...');
  fs.writeFileSync('./src/index.html', emailTemplateHtml);
  console.log('HTML generated successfully!');
} catch (error) {
  console.error('Something went wrong generating the HTML.', error);
}

console.log('\nThank you for using react-mailer :)');
