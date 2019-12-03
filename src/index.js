import readline from 'readline';
import getEmailTemplateHtml from './getEmailTemplateHtml';

console.log('Welcome to react-mailer by playola!');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Which template do you want to use? (welcome | invite) ', function(type) {
  rl.question('To (test@test.com)? ', function(to) {
    rl.question('From (test@test.com)? ', function(from) {
      console.log('Sending email...');
      const emailTemplateHtml = getEmailTemplateHtml(type, to, from);
      console.log(emailTemplateHtml);
      console.log('Email sent successfully!');
      rl.close();
    });
  });
});

rl.on('close', function() {
  console.log('\nThank you for using react-mailer :)');
  process.exit(0);
});
