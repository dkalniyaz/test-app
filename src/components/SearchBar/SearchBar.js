import React, {useState} from 'react';

function SearchBar({ setSearch }) {

  return (
    <div className="search">
        <input 
            type='text' 
            placeholder='Search books...'
            onChange = {(event) => {
                setSearch(event.target.value)
            }}/>
    </div>
  );
}

export default SearchBar;