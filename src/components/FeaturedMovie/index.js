import React from 'react';

import { 
  Container, 
  VerticalArea, 
  HorizontalArea,
  Infos, 
  ButtonsArea 
} from './styles';

const FeaturedMovie = ({ item }) => {
  let firstDate = new Date(item.data.first_air_date);

  let genres = [];
  for (let i in item.data.genres) {
    genres.push(item.data.genres[i].name);
  }

  let description = item.data.overview;
  if(description.length > 350){
    description = description.substr(0,350) + '...';
  }

  return (
    <Container style={{
      backgroundImage: `url(http://image.tmdb.org/t/p/original${item.data.backdrop_path})`
    }}>
      <VerticalArea>
        <HorizontalArea>
          <div className="name">{item.data.original_name}</div>
          
          <Infos>
            <div className="points">{item.data.vote_average}</div>
            <div className="year">{firstDate.getFullYear()}</div>
            <div className="seasons">{item.data.number_of_seasons} temporada{item.data.number_of_seasons !== 1 ? 's' : ''}</div>
          </Infos>
          <div className="description">{description}</div>
          <ButtonsArea>
            <a className="watch-button" href={`/watch/${item.data.id}`}>Assitir</a>
            <a className="my-list-button" href={`/list/add/${item.data.id}`}>+ Minha Lista</a>
          </ButtonsArea>
          <div className="genres"><strong>Gênero{genres.length > 1 ? 's' : ''} : {genres.join(', ')}</strong></div>
        </HorizontalArea>
      </VerticalArea>
    </Container>
  );
};

export default FeaturedMovie;
