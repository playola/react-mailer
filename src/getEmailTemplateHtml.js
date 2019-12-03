import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { WelcomeTemplate, InviteTemplate } from './templates';

function EmailTemplate({ type, to, from }) {
  return (
    <html>
      <head>
  
      </head>
      <body>
        {type === 'welcome' ? (
          <WelcomeTemplate />
        ) : (
          <InviteTemplate />
        )}
      </body>
    </html>
  );
}

export default function getEmailTemplateHtml(type, to, from) {
  const emailTemplateHtml = ReactDOMServer.renderToStaticMarkup(
    <EmailTemplate
      type={type}
      to={to}
      from={from}
    />
  );
  return emailTemplateHtml;
}
