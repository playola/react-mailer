# react-mailer

Trying out SendGrid using templates generated with React and compatible for IE.

## Getting started

```
  git clone https://github.com/playola/react-mailer.git

  cd react-mailer

  npm install
```

After install the dependencies, you must create and modify some variables in order to send an email properly:

  - Create a `sendgrid.env` file with your SendGrid API KEY (see sendgrid.env.example).
  - Sender and receiver emails: variables `to` and `from` with a valid email. You will find it in `index.js > line 18-19`.
  - Your public Google Drive id regarding your image. You will find it in `templates.js > line 23`.

Then, you can run the script to generate and send an email with the selected receiver and sender:

```
  npm run mail
```

## References

  - https://github.com/sendgrid/sendgrid-nodejs
  - https://sendgrid.com/blog/embedding-images-emails-facts
  - https://stackoverflow.com/questions/10311092/displaying-files-e-g-images-stored-in-google-drive-on-a-website
