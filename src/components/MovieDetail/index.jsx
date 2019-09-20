import * as React from 'react';
import styled from 'styled-components'
// import Movie from '../Movie';

const MovieDetailBox = styled.div`
  background: #14213D;
  color: #FCA311;
  width: 280px;
  min-height: 240px;
  border-radius: 5px;
  position: fixed;
  top: 150px;
  left: 30px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h2 {
    font-size: 22px;
  }
`;

const MovieDetail = ({movieDetail}) => {
  return(
    <MovieDetailBox>
      <h2>{movieDetail.Title}</h2>
      <span>Rating: {movieDetail.imdbRating}</span>
      <p>{movieDetail.Plot}</p>
    </MovieDetailBox>
  );
};

export default MovieDetail;