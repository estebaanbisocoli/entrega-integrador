import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Container } from 'semantic-ui-react';
import styled from 'styled-components';

const LocalDropdown = styled(Dropdown)`
  margin-right: 38px;
`;
const FilterContent = ({ value, placeholder, options, onChange }) => {
  console.log('value', value);
  return (
    <LocalDropdown
      selection
      placeholder={placeholder}
      options={options}
      onChange={(evt, data) => {
        onChange(data.value);
      }}
    />
  );
};

FilterContent.propTypes = {};

export default FilterContent;
