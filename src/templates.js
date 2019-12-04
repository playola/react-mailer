import React from 'react';
import ReactDOMServer from 'react-dom/server';

function WelcomeTemplate({ to, from }) {
  return (
    <div>WelcomeTemplate</div>
  );
}

function InviteTemplate({ to, from }) {
  return (
    <div>InviteTemplate</div>
  );
}

function EmailTemplate({ type, to, from }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {type === 'welcome' ? (
          <WelcomeTemplate to={to} from={from} />
        ) : (
          <InviteTemplate to={to} from={from} />
        )}
      </body>
    </html>
  );
}

/**
 * Gets the email template HTML.
 * @param   {string} type One of: ["welcome", "invite"].
 * @param   {string} to   Receiver email.
 * @param   {string} from Sender email.
 * @returns {string}      The generated HTML based on the template type.
 */
export function getEmailTemplateHtml(to, from, type = 'welcome') {
  const emailTemplateHtml = ReactDOMServer.renderToStaticMarkup(
    <EmailTemplate
      type={type}
      to={to}
      from={from}
    />
  );
  return emailTemplateHtml;
}
