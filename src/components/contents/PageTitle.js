import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

const PageTitle = ({ title }) => {
  return (
    <Header style={{ fontSize: '3em', fontWeight: '300' }} size="huge" as="h2">
      {title}
    </Header>
  );
};

PageTitle.propTypes = {};

export default PageTitle;
