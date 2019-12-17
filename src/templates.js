import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {
  headerData,
  buttonData,
  buttonLink,
  image,
  html,
  tableContainer,
  contentBody,
  contentData,
} from './templates.styles';

function Header({ children, align = 'left' }) {
  return (
    <thead>
      <tr width="100%" height="57">
        <td style={headerData} valign="top" align={align}>
          {children}
        </td>
      </tr>
    </thead>
  );
}

function InlineButton({ children, align, ...rest })  {
  return (
    <tr width="100%">
      <td style={buttonData} align={align} {...rest}>
        <a style={buttonLink} href="https://playolaizq.com" target="_blank">
          <span>
            {children}
          </span>
        </a>
      </td>
    </tr>
  );
}

function InlineImage({ src, align = 'center' }) {
  return (
    <tr width="100%">
      <td align={align}>
        <img style={image} src={src} />
      </td>
    </tr>
  );
}

function EmailTemplate({ to, from, type }) {
  const isInvite = type === 'invite';
  const title = 'playola';
  const welcomeText = 'Hello playola, we are happy to welcome you to playola!';
  const descriptionText = isInvite
    ? 'You have been invited to join playola organization, please follow the instructions to start using the platform.'
    : 'Your login token is AKM1';

  return (
    <table style={tableContainer}>
      <Header>
        {title}
      </Header>
      <tbody style={contentBody}>
        <tr width="100%">
          <td style={contentData} valign="top" align="left">
            <p>{welcomeText}</p>
            <p>{descriptionText}</p>
          </td>
        </tr>
        <InlineImage src="assets/smiley-face.svg" />
        <InlineButton align="right">
          Go to playola
        </InlineButton>
      </tbody>
    </table>
  );
  /* return (
    <html style={html}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <table style={tableContainer}>
          <Header>
            {title}
          </Header>
          <tbody style={contentBody}>
            <tr width="100%">
              <td style={contentData} valign="top" align="left">
                <p>{welcomeText}</p>
                <p>{descriptionText}</p>
              </td>
            </tr>
            <InlineImage src="assets/smiley-face.svg" />
            <InlineButton align="right">
              Go to playola
            </InlineButton>
          </tbody>
        </table>
      </body>
    </html>
  ); */
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
