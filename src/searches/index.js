import React, {useState, useEffect} from 'react';
import axios from "axios";

import SearchBar from "./SearchBar"
import Results from "./Results"
import Nominations from "./Nominations"



const Searches = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [nominate, setNominate] = useState([]);
  

  useEffect(() => {
    const apiKey = '3b233bc1'
    const url = `http://omdbapi.com/?apikey=${apiKey}&s=${term}`
     axios.get(url).then(res => {
       setResults(res.data.Search)
     })
  }, [term])

  // const onSubmit = () => {
  //   console.log('ond')
    
  // }

  return (
    <>
      <header className="logo">
        <img src={process.env.PUBLIC_URL + '/movies.png'} alt="Brand" />
      </header>
      <main>
        <>
        <SearchBar onChange={(e)=>setTerm(e.target.value)} />
        </>
         {results && <Results 
            results={results}
            onClick = {setNominate}
            />}

         <Nominations    
          movie ={nominate}
        />
       
      </main>
    </>
  ); 

}

export default Searches;