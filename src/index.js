import readline from 'readline';
import fs from 'fs';
import { getEmailTemplateHtml } from './templates';

console.log('Welcome to react-mailer by playola!');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); 

rl.question('Which template do you want to use? (welcome | invite) ', function(type = 'welcome') {
  rl.question('To (receiver@test.com)? ', function(to = 'receiver@test.com') {
    rl.question('From (sender@test.com)? ', function(from = 'sender@test.com') {
      /* if (!to || !from) {
        console.error('You need to specify the sender and receiver emails.');
        rl.close();
      } */

      // Sent email to the specified data.
      console.log('Sending email...');
      const emailTemplateHtml = getEmailTemplateHtml(to, from, type);
      console.log(emailTemplateHtml);
      console.log('Email sent successfully!');

      // Generate HTML file with the sent email template.
      try {
        console.log('Generating HTML file...');
        fs.writeFileSync('./src/index.html', emailTemplateHtml);
        console.log('HTML generated successfully!');
      } catch (error) {
        console.error('Something went wrong generating the HTML.', error);
      }

      rl.close();
    });
  });
});

rl.on('close', function() {
  console.log('\nThank you for using react-mailer :)');
  process.exit(0);
});
