import React from 'react'
import Movie from './Movie'

export default function Nominations(props) {
    const movies = props.movie
  
  return (
    <section className="nominations">
      <h1>Your Nominations</h1>
      {movies.map((movie, index) => <Movie key={index} movie={movie} message="Remove" onClick ={() => props.onClick(movie)}/>)}
    </section>
  );
}