import { useState } from 'react'
import './App.css'
import { SearchBar } from './components/SearchBar'

function App() {

  return (
    <div className="App">
      <div className='search-bar-container'>
        <SearchBar />
        <h3>Search Results</h3>
      </div>
    </div>
  )
}

export default App
