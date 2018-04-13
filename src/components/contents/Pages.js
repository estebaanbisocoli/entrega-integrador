import React from 'react';

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

export default Pages;
