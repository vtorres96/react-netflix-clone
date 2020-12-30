import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import Header from './components/Header';
import FeaturedMovie from './components/FeaturedMovie';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import Loading from './components/Loading';

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
      let originals = list.filter(item => item.slug === 'originals');
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

      <MovieList list={movieList} />
      
      <Footer /> 
     
      {movieList.length <= 0 &&
        <Loading />
      }
      
      <GlobalStyles />
    </>
  )
}

export default App;
