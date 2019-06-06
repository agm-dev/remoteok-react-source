import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Search from './components/search/Search';

function App() {

  const tags = [
    'javascript',
    'nodejs',
    'react',
  ];

  return (
    <div className="app">
      <Header jobs="23"/>
      <Search tags={ tags } />
    </div>
  );
}

export default App;
