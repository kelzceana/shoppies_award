import React from 'react';

export default function Movie(props) {
  console.log(props.movie
    , "movie component")
  return (
    <article className="movie">
      <img className="movie__thumbnail" src ={props.movie.Poster} alt="movie" />
      <div className="movie__info">
        <div className="movie__name">{props.movie.Title}</div>
        <div className="movie__artist"></div>
      </div>
    </article>
  );
}