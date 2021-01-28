import React, { useState } from 'react';

export default function Movie(props) {
  const [isDisabled, setDisabled] = useState(false)
  const handleClick = () => {
    setDisabled(true)
    console.log("jsj")
    return props.onClick
  }
  


  return (
    <article className="movie">
      <img className="movie__thumbnail" src ={props.movie.Poster} alt="movie" />
      <div className="movie__info">
        <div className="movie__name">{props.movie.Title}</div>
        <div className="movie__artist">{props.movie.Year}</div>
      </div>
      <button className="nominate-btn" disabled={isDisabled} onClick={props.onClick}>{props.message}</button>
    </article>
  );
}
