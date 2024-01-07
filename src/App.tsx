import React from 'react';
import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import Photo from './components/Photo';
import AboutMe from './components/AboutMe';


function App() {
  return (
    <div className="App">
      <Header />
      <Photo />
      <Title />
      <AboutMe />
    </div>
  );
}

export default App;
