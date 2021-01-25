import React from 'react'
import Movie from './Movie'

export default function Nominations(props) {
  console.log(props, "nominations")
  return (
    <section className="nominations">
      <h1>Your Nominations</h1>
      <Movie movie={props.movie}/>
    </section>
  );
}