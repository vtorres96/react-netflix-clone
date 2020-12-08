import React, { useState } from 'react';

import { 
  Container,
  ListArea, 
  List,
  Item
} from './styles';
import { NavigateBefore, NavigateNext } from "@material-ui/icons";

const MovieRow = ({title, items}) => {

  const [scrollX, setScrollX]= useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 0){
      x = 0;
    }
    setScrollX(x);
  }

  const handleRightArrow = () =>{
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.data.results.length * 150;
    if(window.innerWidth - listW > x){
      x = (window.innerWidth - listW) - 60;
    }
    setScrollX(x);
  }

  return (
    <Container>
      <h2>{title}</h2>

      <div className="left-icon" onClick={handleLeftArrow}>
          <NavigateBefore style={{fontSize:50}} />
      </div>
      <div className="right-icon" onClick={handleRightArrow}>
          <NavigateNext style={{fontSize:50}} />
      </div>

      <ListArea>
        <List style={{marginLeft: scrollX, width: items.data.results.length * 150}}>
          {items.data.results.length > 0 && items.data.results.map((item, key)=>(
            <Item key={key}>    
                <img  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
            </Item>
          ))}
        </List>
      </ListArea>
    </Container>
  );
};

export default MovieRow;
