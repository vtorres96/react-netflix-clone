import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import Header from './components/Header';
import FeaturedMovie from './components/FeaturedMovie';
import MovieRow from './components/MovieRow';

import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // getting all the movies on the list
      let list = await Tmdb.getHomeList();
      setMovieList(list)

      // get the featured
      let originals = list.filter(item => item.slug == 'originals');
      let randomChoosen = Math.floor(Math.random() * (originals[0].items.data.results.length - 1));
      let choosen = originals[0].items.data.results[randomChoosen];
      let choosenInfo = await Tmdb.getMovieInfo(choosen.id, 'tv');
      setFeaturedData(choosenInfo);
    }
    loadAll();
  }, []);

  useEffect(() => {
      const scrollListener = () =>{
        if(window.scrollY > 10) {
          setBlackHeader(true);
        } else {
          setBlackHeader(false);
        }
    }

    window.addEventListener('scroll', scrollListener);

    return () =>{
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <>  
      <Header black={blackHeader}/>

      {featuredData &&
        <FeaturedMovie item={featuredData}/>
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key}  title={item.title} items={item.items}/>
        ))}
      </section>
      
      <footer>
        Desenvolvido por Vtorres96 <br/>
        Todos os direitos das imagens são da Netflix <br/>
        Dados Extraidos de https://www.themoviedb.org/ <br/>
      </footer>
     
      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="loading"></img>
        </div>
      }
      
      <GlobalStyles />
    </>
  )
}

export default App;
