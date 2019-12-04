import React from 'react';
import ReactDOMServer from 'react-dom/server';

function Button({ children, align, ...rest })  {
  return (
    <td className="buttonData" align={align} {...rest}>
      <a className="buttonLink" href="https://playolaizq.com" target="_blank">
        <span>
          {children}
        </span>
      </a>
    </td>
  );
}

function EmailTemplate({ to, from, type }) {
  const isInvite = type === 'invite';
  const title = 'playola';
  const welcomeText = 'Hello playola, we are happy to welcome you to playola!';
  const descriptionText = isInvite
    ? 'You have been invited to join Sanitas clinic, please follow the instructions to start using the platform.'
    : '';
  const credentialsText = isInvite
    ? ''
    : 'Your login passcode is AKM1';
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" href="templates.css"></link>
      </head>
      <body>
        <table className="tableContainer">
          <thead>
            <tr width="100%" height="57">
              <td className="headerData" valign="top" align="left">
                {title}
              </td>
            </tr>
          </thead>
          <tbody className="contentBody">
            <tr className="contentRow" width="100%">
              <td className="contentData" valign="top" align="left">
                <p>{welcomeText}</p>
                <p>{descriptionText}</p>
                <p>{credentialsText}</p>
              </td>
            </tr>
            <tr className="contentRow" width="100%">
              <Button align="right">
                Go to playola
              </Button>
            </tr>
          </tbody>
        </table>
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
