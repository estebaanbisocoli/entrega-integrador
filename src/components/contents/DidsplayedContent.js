import React from 'react';
import PropTypes from 'prop-types';

import { Container, Grid } from 'semantic-ui-react';
import { PageTitle, Filters, ItemList, Pages } from './';
const DisplayedContent = ({
  title = 'Default',
  items,
  loading,
  error,
  link,
  genres,
  year,
  genre,
  onChangeYear,
  onChangeGenre,
  onPageChange,
  page,
  totalPages,
}) => {
  return (
    <Container>
      <Grid columns={1}>
        <Grid.Row>
          <PageTitle title={title} />
        </Grid.Row>
        <Grid.Row>
          <Filters
            year={year}
            genres={genres}
            onChangeYear={onChangeYear}
            onChangeGenre={onChangeGenre}
          />
        </Grid.Row>
      </Grid>
      <ItemList error={error} loading={loading} items={items} type="simple" />
      <Grid columns={1}>
        <Grid.Row>
          <Pages
            currentPage={page}
            totalPages={totalPages}
            onChange={onPageChange}
          />
        </Grid.Row>
      </Grid>
    </Container>
  );
};

DisplayedContent.propTypes = {};

export default DisplayedContent;
