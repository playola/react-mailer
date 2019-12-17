import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Header from './components/Header';
import InlineButton from './components/InlineButton';
import InlineImage from './components/InlineImage';

import {
  tableContainer,
  contentBody,
  contentData,
  welcomeParagraph,
} from './templates.styles';

function EmailTemplate({ to, from, org = 'SendGrid' }) {
  const title = `Welcome to ${org}!`;
  const welcomeText = `Hello ${to}, we are happy to welcome you!`;
  const descriptionText = `${from} invited you to join ${org}, please follow the instructions and join the team :)`;
  const tokenText = 'Your access token is AKM1';

  return (
    <table style={tableContainer}>
      <Header>
        {title}
      </Header>
      <tbody style={contentBody}>
        <tr width="100%">
          <td style={contentData} valign="top" align="left">
            <p style={welcomeParagraph}>{welcomeText}</p>
            <p>{descriptionText}</p>
            <p>{tokenText}</p>
          </td>
        </tr>
        <InlineImage filenamePath="assets/smiley-face.svg" />
        <InlineButton align="right">
          {`Go to ${org}`}
        </InlineButton>
      </tbody>
    </table>
  );
}

/**
 * Gets the email template HTML.
 * @param   {string} to   Receiver email.
 * @param   {string} from Sender email.
 * @returns {string}      The generated HTML with a header and content.
 */
export function getEmailTemplateHtml(to, from, org) {
  const emailTemplateHtml = ReactDOMServer.renderToStaticMarkup(
    <EmailTemplate to={to} from={from} org={org} />
  );
  return emailTemplateHtml;
}
