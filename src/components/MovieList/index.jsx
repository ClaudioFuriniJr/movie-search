import * as React from 'react';
import styled from 'styled-components'
import Movie from '../Movie';

const Movies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  margin: 50px auto;
`;

const MovieList = ({ movies, handleDetailSearch }) => {
  return(
    <Movies>
      {
        movies.map((movie) => {
          return <Movie movie={movie} handleDetailSearch={handleDetailSearch} key={movie.imdbID} />
        })
      }
    </Movies>
  );
};

export default MovieList;