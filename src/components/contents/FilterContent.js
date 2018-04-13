import React from 'react';

import { Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';

const LocalDropdown = styled(Dropdown)`
  margin-right: 38px;
`;
const FilterContent = ({ value, placeholder, options, onChange }) => {
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

export default FilterContent;
