import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Search } from './Search'

function App() {
  return (
    <div>
      <Search 
      placeholder= 'search..'
      items = {['html', 'css', 'javascript', 'react js', 'react native', 'by', 'naufal', 'yukafi']}
      />
    </div>
  );
}

export default App;
