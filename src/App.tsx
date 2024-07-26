import React, { useEffect,useState } from 'react';

import { BrowserRouter as Router, useNavigation, Routes, Route, useNavigate, Link } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Header1 from './components/Header/Header';
import Title from './components/Title';
import Photo from './components/Photo';
import AboutMe from './components/AboutMe';
import GithubRepository from './components/Repositories';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Repostest from './components/Repotest';
import Contact from './components/Contact';
import Skills from './components/Skills';


import Home from './components/Home/Home';


function App() {

  // const navigate = useNavigate();

  const [ismobil, setIsMobil] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const isMobile = window.innerWidth <= 750;
      setIsMobil(isMobile);
    };
  
    checkIsMobile();
  
    window.addEventListener('resize', checkIsMobile);
  
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);
  



  return (
    <div className="App">


<Header1 />

<Routes>


<Route path={'/'} element={<Home />} />
<Route element = {<>
      {/* <Header /> */}
     <Link to={'/'}> <Photo /></Link>
      <Title  ismobil={ismobil} />



      <AboutMe ismobil={ismobil} />
      <Education  ismobil={ismobil} />
      <Experience ismobil={ismobil} />
      <Projects />      
      <Skills />

      <Contact />
            {/* <GithubRepository />
<Repostest /> */}
  </>} />

</Routes>


    </div>
  );
}

export default App;
