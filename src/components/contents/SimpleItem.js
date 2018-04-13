import React from 'react';

import { SectionItem } from '../Section';
const SimpleItem = ({ alt, url, onHover }) => {
  return (
    <div>
      <SectionItem alt={alt} url={url} />
    </div>
  );
};

export default SimpleItem;
