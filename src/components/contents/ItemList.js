import React from 'react';

import { SimpleItems } from './';
const ItemList = ({ items, loading, type, error }) => {
  if (type === 'simple') {
    return <SimpleItems items={items} />;
  }
  if (!items && !loading) {
    return 'No se encontro nada';
  }
};

export default ItemList;
