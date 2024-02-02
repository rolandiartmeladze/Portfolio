import React, { useEffect,useState } from 'react';
import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import Photo from './components/Photo';
import AboutMe from './components/AboutMe';
// import GithubRepository from './components/Repositories';
import Education from './components/Education';
import Experience from './components/Experience';


function App() {


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
      <Header />
      <Photo />
      <Title  ismobil={ismobil} />
      <AboutMe ismobil={ismobil} />
      <Education  ismobil={ismobil} />
      <Experience ismobil={ismobil} />
            {/* <GithubRepository /> */}
    </div>
  );
}

export default App;
