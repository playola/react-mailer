import React from 'react';
import { buttonData, buttonLink } from './styles';

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

export default InlineButton;
