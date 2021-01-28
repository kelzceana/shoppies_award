import React, {useState, useEffect} from 'react';
import axios from "axios";

import SearchBar from "./SearchBar"
import Results from "./Results"
import Nominations from "./Nominations"
import Error from "./Error"




const Searches = () => {
  const [term, setTerm] = useState(""); // state of the search bar
  const [error, setError] = useState("")
  const [results, setResults] = useState([]); // result state
  const [lists, setLists] = useState([]); //nomination state
  

  useEffect(() => {
    
      const apiKey = '3b233bc1'
      const url = `http://omdbapi.com/?apikey=${apiKey}&s=${term}`
      axios.get(url).then(res => {
        if (res.data.Error !== undefined) {
          setError(res.data.Error)
          setResults('')
        }
        setResults(res.data.Search)
        
        console.log(res.data.Error)
      })
  }, [term])

  const nominateMovie = (movie) => { 
    const newList = lists.concat(movie)
   setLists(newList)
  }
  const remove = (movie) => {
    console.log(movie, "moffff")
    const newList = lists.filter(item => item !== movie)
    setLists(newList)
  }

  const handleOnChange = (e) => {
    setTerm(e.target.value)
    if (e.target.value === "") setError("")
  }

  return (
    <>
      <header className="logo">
        <img src={process.env.PUBLIC_URL + '/movies.png'} alt="Brand" />
      </header>
      <main>
        <SearchBar onChange={(e)=>handleOnChange(e)} />
        {!results && error !== "Incorrect IMDb ID." && <Error  message={error}/>}
        {results && <Results results={results} onClick = {nominateMovie}/>}
        {lists.length > 0 && <Nominations movie ={lists} onClick = {remove}/>}
      </main>
    </>
  ); 

}

export default Searches;