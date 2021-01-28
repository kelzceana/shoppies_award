import React, {useState} from 'react'

import Movie from './Movie'
import Nominations from "./Nominations"

const Results = (props) => {
  //monitor state of nomination
  

  

  //render Movie component for each movie object
  const {results} = props
  
  const getResults = results.map((movie, index) => 
  
    <Movie
      key={index}
      movie={movie}
      onClick ={() => props.onClick(movie)}
      message="Nominate"
    />
  )
  

  return (
    <>
    {getResults}
    </>
  )
}

export default Results