import React, { useEffect , useState} from "react";
import styled from 'styled-components';
import stulogo from '../img/logoStu.png';
import codehslogo from '../img/logoCodehs.webp';

interface abouteme {
  ismobil: boolean;
}


const Aboutme = styled.div`

`;




const Education: React.FC<abouteme> = ({ismobil}) => {
    
    const [title, setTitle] = useState("");
    
    useEffect(() => {
      const educationTitle = ["E", "d", "u", "c", "a", "t", "i", "o", "n"];
    
      setTimeout(() => {
              educationTitle.forEach((item, index) => {
        setTimeout(() => {
        setTitle((prevTitle) => prevTitle + item);
        }, index * 100);
    });

      }, 5000);

    


  }, []);


  return (
    <>
      
<h1 style={{ marginTop: "20px",marginBottom: '5px', padding:'5px', color: "white", fontWeight: "bolder", borderBottom: '4px solid yellow' }}>{title}</h1>
<div style={{width:'100%',  minHeight: '300px'}}>

<article style={{    
    display: 'flex',
    width: '100%',
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft:'5%',
    justifyContent: 'flex-start'
    }}>
        <div style={{backgroundColor: 'white' , width: '70px', padding:'3px', borderRadius: '50%', marginTop:'20px'}}>
            <img style={{width: '100%'}} src={stulogo} alt="eduLogo"/></div>
        <ul style={{listStyle:'none', padding:'10px', margin:'5px', maxWidth: '70%', textAlign:'left'}}>
        <h1 style={{margin:'5px'}}>The Georgian Technical University (GTU)</h1>

                <strong style={{color:'yellow', margin:'4px'}}>Bachelor's degree 2015 - 2019 y.</strong>

           <li> 
           <strong>Information Technology (IT): </strong>
            This program typically covers a wide range of topics such as.
            </li>

                <li>
               <strong> Computer Engineering:</strong> 
                 Design and development of computer systems and hardware.
                </li>

                    <li> 
                    <strong>Network Engineering or Networking:</strong> 
                      Programs in networking focus on the design, implementation, and management of computer networks.
                    </li>

                </ul>
    </article>


    <article style={{    
    display: 'flex',
    width: '100%',
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft:'5%',
    justifyContent: 'flex-start'
    }}>
        <div style={{backgroundColor: 'white' , width: '70px', padding:'3px', borderRadius: '50%', marginTop:'20px'}}>
            <img style={{width: '100%'}} src={codehslogo} alt="eduLogo"/></div>
        <ul style={{listStyle:'none', padding:'10px', margin:'5px', maxWidth: '70%', textAlign:'left'}}>
        <h1 style={{margin:'5px'}}> codehs.com </h1>

                <strong style={{color:'yellow', margin:'4px'}}>Introduction to Computer Science in JavaScript</strong>

           <li>JavaScript Programming</li>

                

                    

                </ul>
    </article>




</div>
    </>
  );
};

export default Education;
