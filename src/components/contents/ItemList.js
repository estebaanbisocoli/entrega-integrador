import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SimpleItems } from './';
const ItemList = ({ items, loading, type, error }) => {
  if (type === 'simple') {
    return <SimpleItems items={items} />;
  }
  if (!items && !loading) {
    return 'No se encontro nada';
  }
};

ItemList.propTypes = {};

export default ItemList;
