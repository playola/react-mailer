import React from 'react';
import { headerData } from './styles';

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

export default Header;
