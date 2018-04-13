import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  max-width: 100%;
`;
const SectionItem = ({ url, alt }) => {
  return <Image src={url} alt={alt} />;
};

export default SectionItem;
