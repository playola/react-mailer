import React from 'react';
import path from 'path';
import { image } from './styles';

function InlineImage({ id, align = 'center' }) {
  const imgSrc = `https://drive.google.com/uc?export=view&id=${id}`;

  return (
    <tr width="100%">
      <td align={align}>
        <img
          style={image}
          src={imgSrc}
          title="logo"
          alt="logo"
          width="325"
          height="250"
        />
      </td>
    </tr>
  );
}

export default InlineImage;
