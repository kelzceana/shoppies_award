import React from 'react'

import Movie from './Movie'

const Results = (props) => {
  const {results} = props
  console.log(results , "before mapping")
  const getResults = results.map((movie, index) => 
    <Movie
      key={index}
      movie={movie}
    />
  )
  return getResults
}

export default Results