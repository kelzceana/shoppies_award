import React from 'react'
import Movie from './Movie'

export default function Nominations(props) {
    const movies = props.movie
  console.log(props, "nominations")
  return (
    <section className="nominations">
      <h1>Your Nominations</h1>
      {movies.map(movie => <Movie movie={movie} message="Remove" />)}
      {console.log(props.movie, 'kkkkkk')}
    </section>
  );
}