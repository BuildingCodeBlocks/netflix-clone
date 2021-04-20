import React from 'react';
import Movie from './Movie';
import requests from '../../utils/requests';
import Banner from './Banner';

const Catalog = () => {
    return (
        <div className="app">
        <Banner />
        <Movie 
          title="NETFLIX ORIGINALS" 
          fetchUrl={requests.fetchNetflixOriginals} 
          isLargeRow
        />
        <Movie title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Movie title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Movie title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Movie title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Movie title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Movie title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Movie title="Documentateries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    );
}

export default Catalog;