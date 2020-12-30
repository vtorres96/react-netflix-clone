import React from 'react';
import MovieRow from '../MovieRow';

import { Container } from './styles';

const MovieList = ({ list }) => {
  return (
    <Container>
      {list.map((item, key) => (
          <MovieRow key={key}  title={item.title} items={item.items}/>
      ))}
    </Container>
  );
};

export default MovieList;
