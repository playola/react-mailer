import React from 'react';
import fs from 'fs';
import path from 'path';
import { image } from './styles';

function base64(filename, data) {
  let extname = path.extname(filename).substr(1);
  extname = extname || 'png';

  if (extname === 'svg') {
    extname = "svg+xml"
  }

  return 'data:image/svg+xml' + extname + ';base64,' + data.toString('base64');
}

function base64Sync (filenamePath) {
  const filename = path.resolve('src', filenamePath);
  const data = fs.readFileSync(filename);
  return base64(filename, data);
};

function InlineImage({ filenamePath, align = 'center' }) {
  // TODO: Review how to display images properly.
  const base64Src = base64Sync(filenamePath);

  return (
    <tr width="100%">
      <td align={align}>
        <img style={image} src={filenamePath} alt="" />
      </td>
    </tr>
  );
}

export default InlineImage;
