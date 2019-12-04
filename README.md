# react-mailer

Trying out SendGrid using templates generated with React and compatible for IE.

## Getting started

```
  git clone https://github.com/playola/react-mailer.git

  cd react-mailer

  npm install
```

After install the dependencies, you can try to send an email via cmd. Some prompts will ask for basic fields in order to send the email, e.g.: `type`, `to`, `from`:

```
  npm run mail

  // Welcome to react-mailer by playola
  // Which template do you want to use (welcome | invite)?
  welcome

  // To (test@test.com)?
  playolaizq.sender@gmail.com

  // From (test@test.com)?
  playolaizq.receiver@gmail.com
```

Then, we will generate and send an email with the selected properties.

## References

  - https://nodejs.org/api/readline.html
  - https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/
