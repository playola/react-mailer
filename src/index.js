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

// IMPORTANT!
// Add the following variables to send the email to an existing address.
const to = 'your-email@gmail.com';
const from = 'your-email@gmail.com';
const org = 'SendGrid';

console.log(`\nSending email to ${to} from ${from}...`);

// Compose the HTML, and generate the email template.
const emailTemplateHtml = getEmailTemplateHtml(to, from, org);

// Compose the SendGrid message, and send it.
const msg = {
  to,
  from,
  subject: `Welcome to ${org}!`,
  text: 'Trying out email templates with React',
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
