import React from 'react';
import PropTypes from 'prop-types';
import { SectionItem } from '../Section';
const SimpleItem = ({ alt, url, onHover }) => {
  return (
    <div>
      <SectionItem alt={alt} url={url} />
    </div>
  );
};

SimpleItem.propTypes = {};

export default SimpleItem;
