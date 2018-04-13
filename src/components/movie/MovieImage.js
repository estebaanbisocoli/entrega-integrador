import React from 'react';
import { Image } from 'semantic-ui-react';

const MovieImage = ({ img, title }) => {
  return <Image style={{ display: 'inline-block' }} src={img} alt={title} />;
};

export default MovieImage;
