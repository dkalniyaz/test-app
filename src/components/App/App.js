import './App.css';

import React, {useState} from 'react';

import BooksList from '../BooksList/BooksList';
import SearchBar from '../SearchBar/SearchBar';
import BookDetails from '../BooksList/BookDetails/BookDetails';

function App() {

  const [search, setSearch] = useState('')
  const [selectedbook, setselectedbook] = useState(null)

  return (
    <div className="app">
      <SearchBar setSearch = {setSearch} />
      <BooksList search = {search} onSelectBook = {setselectedbook} />
      {selectedbook && <BookDetails bookId = {selectedbook} />}
    </div>
  );
}

export default App;
