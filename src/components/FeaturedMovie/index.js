import React from 'react';

import { 
  Container,
  VerticalArea,
  HorizontalArea,
  Name,
  Infos,
  Points,
  Year,
  Seasons,
  Description,
  ButtonsArea,
  Genres
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
          <Name>{item.data.original_name}</Name>
          
          <Infos>
            <Points>{item.data.vote_average}</Points>
            <Year>{firstDate.getFullYear()}</Year>
            <Seasons>
              {item.data.number_of_seasons} temporada{item.data.number_of_seasons !== 1 ? 's' : ''}
            </Seasons>
          </Infos>

          <Description>{description}</Description>

          <ButtonsArea>
            <a className="watch-button" href={`/watch/${item.data.id}`}>Assitir</a>
            <a className="my-list-button" href={`/list/add/${item.data.id}`}>+ Minha Lista</a>
          </ButtonsArea>
          <Genres>
            <strong>Gênero{genres.length > 1 ? 's' : ''} : {genres.join(', ')}</strong>
          </Genres>
        </HorizontalArea>
      </VerticalArea>
    </Container>
  );
};

export default FeaturedMovie;
