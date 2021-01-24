import React, { Fragment, useEffect, useState } from "react";
import SearchBar from "./components/SearchBar"
import Nominations from "./components/Nominations"

//import axios from 'axios'



export default function App(props) {

  return (
    <Fragment>
      <header className="logo">
        <img src={process.env.PUBLIC_URL + '/movies.png'} alt="Brand" />
      </header>
      <main>
        <SearchBar/>
        <Nominations />
      </main>
    </Fragment>
  );
}

