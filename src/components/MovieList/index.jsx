import * as React from 'react';
import styled from 'styled-components'
import Movie from '../Movie';

const Movies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  margin: 50px auto;
`;

const MovieList = ({ movies }: Props) => {
  return(
    <Movies>
      {
        movies.map((movie) => {
          return <Movie movie={movie} key={movie.imdbID} />
        })
      }
    </Movies>
  );
};

export default MovieList;