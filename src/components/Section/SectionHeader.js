import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const MyHeader = styled.div`
  padding-bottom: 0px;
  display: inline-block;
`;
const SectionHeader = ({ title, link }) => {
  return (
    <MyHeader>
      <Header floated="left" as="h3">
        {title}
      </Header>
      <Header floated="left">{link && <Link to={link}>Ver Mas</Link>}</Header>
    </MyHeader>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string
};

export default SectionHeader;
