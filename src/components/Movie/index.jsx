import * as React from 'react';
import styled from 'styled-components'

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  background: rgba(0, 0, 0, .2);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  &:hover {
    background: rgba(0, 0, 0, .7);
  }
`;
const MovieBox = styled.li`
  list-style: none;
  position: relative;
  height: 250px;
  border: 5px solid #14213D;
  border-radius: 3px;
  margin: 0 15px 15px 0;
  width: 180px;

  &:hover {
    border: 5px solid #FCA311;
  }

  &:nth-child(3n) {
    margin-right: 0;
  }
`;
const MovieDetails = styled.div`
  display: none;
  color: #FCA311;
  padding: 20px 10px;

  ${Overlay}:hover & {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }

  h3 {
    margin: 0;
  }
`;
const Poster = styled.img`
  height: 250px;
  width: 180px;
`;

const Movie = ({ movie }: Props) => {

  return(
    <MovieBox>
      <Poster src={movie.Poster} alt={movie.Title} />
      <Overlay>
        <MovieDetails>
          <h3>{movie.Title}</h3>
          <span>{movie.Year}</span>
        </MovieDetails>
      </Overlay>
    </MovieBox>
  );
};

export default Movie;