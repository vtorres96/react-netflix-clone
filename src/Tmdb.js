import api from './services/api';
const API_KEY = '';

export default {
     getHomeList : async () =>{
        return [
            {
                slug: 'originals',
                title : "Originais do Netflix",
                items : await api.get(`/discover/tv/?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title : "Recomendados para Você",
                items : await api.get(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title : "Em Alta",
                items : await api.get(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title : "Ação",
                items : await api.get(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title : "Comédia",
                items : await api.get(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title : "Terror",
                items : await api.get(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title : "Romance",
                items : await api.get(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },            
            {
                slug: 'documentary',
                title : "Documentários",
                items : await api.get(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
     },

     getMovieInfo : async (movieId, type) =>{
        let info = {};
        if(movieId) {
            switch(type){
                case 'movie':
                    info = await api.get(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                 case 'tv':
                    info = await api.get(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                break;
            }
        }
         return info;
     }
}