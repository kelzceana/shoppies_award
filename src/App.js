import React, { Fragment, useEffect, useState } from "react";
import axios from "axios"

import SearchBar from "./components/SearchBar"
import Nominations from "./components/Nominations"

//import axios from 'axios'



export default function App(props) {

  //tracking the searchbar state

  const [term, setTerm] = useState("")

  useEffect(() => {
    const apiKey = '3b233bc1'
    const url = `http://omdbapi.com/?apikey=${apiKey}&s=${term}`
    const response = axios.get(url).then(res => console.log(res.data))
   
  }, [term])


  return (
    <Fragment>
      <header className="logo">
        <img src={process.env.PUBLIC_URL + '/movies.png'} alt="Brand" />
      </header>
      <main>
        <SearchBar onChange={(event)=>setTerm(event.target.value)} />
        <Nominations />
      </main>
    </Fragment>
  );
}

