import React from 'react';

import { Header } from 'semantic-ui-react';

const PageTitle = ({ title }) => {
  return (
    <Header style={{ fontSize: '3em', fontWeight: '300' }} size="huge" as="h2">
      {title}
    </Header>
  );
};

export default PageTitle;
