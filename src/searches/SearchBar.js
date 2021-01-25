import React from 'react';


export default function SearchBar(props) {
  return (
    <section className="search">
      <form className="search__form" onSubmit={event => event.preventDefault()}>
        <input
          className="radius"
          spellCheck="false"
          placeholder="Search Movies"
          name="search"
          type="text"
          onChange={props.onChange}
        />
      </form>
    </section>
  );
}