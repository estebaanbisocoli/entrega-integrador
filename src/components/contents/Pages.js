import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, Container } from 'semantic-ui-react';

const Pages = ({ currentPage, onChange, totalPages }) => {
  return (
    <Container>
      <Pagination
        totalPages={totalPages}
        activePage={currentPage}
        onPageChange={(evt, { activePage }) => {
          onChange(activePage);
        }}
      />
    </Container>
  );
};

Pages.propTypes = {};

export default Pages;
