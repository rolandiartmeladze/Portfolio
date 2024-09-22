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
// import Projects from './components/Projects';
import Repostest from './components/Repotest';
import Contact from './components/Contact';
import Skills from './components/Skills';


import Home from './components/Home/Home';
import Navigate from './components/Navigate/Navigate';
import Projects from './components/Projects/Projects';
import Work from './components/Work/Work';
import Blog from './components/Blog/Blog';
import Post from './components/Blog/post/Post';
import AboutProject from './components/Blog/Posts/AboutProject'
import Register from './components/Blog/author/Register';
import Login from './components/Blog/author/Login';

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
  

  const [selectedPost, setSelectedPost] = useState<number>(0)

  
  return (
    <div className="App">


<Header1 />
<Navigate />
<Routes>


<Route path={'/'} element={<Home />} />
<Route path={'/Projects'} element={<Projects />} />
<Route path={'/Experiance'} element={<Work />} />
<Route path={'/Blog'} element={<Blog setSelectedPost={setSelectedPost} />} />
{/* <Route path={'Blog/user_profile'} element={ <Login /> } />
<Route path={'Blog/register'} element={ <Register setSignUp={Function} signUp={null} /> } /> */}

<Route path={'/Blog/:id'} element={<Post selectedPost={selectedPost} />} />

<Route path="/AboutProject" element={<AboutProject />} />






<Route element = {<>
      {/* <Header /> */}
     <Link to={'/'}> <Photo /></Link>
      <Title  ismobil={ismobil} />



      <AboutMe ismobil={ismobil} />
      <Education  ismobil={ismobil} />
      <Experience ismobil={ismobil} />
      {/* <Projects />       */}
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
