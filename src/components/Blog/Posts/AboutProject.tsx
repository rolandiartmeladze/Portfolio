import React, {useState, useEffect, ChangeEvent} from "react";
import '../Post.css'
import { RxAvatar } from "react-icons/rx";
import { FaClock } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface Props{
    name: string;
}

const AboutProject =()=>{

    const [data, setData] = useState<Props | null>(null);


    const avatari = 'https://avatars.githubusercontent.com/u/13499054?v=4';

    const link = 'https://mica-soft-makeup.glitch.me';

    useEffect(() => {
        fetch(`${link}/api/profile`)
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

      const DataTransfer = {
        Now: () => {
          const now = new Date();
          const hours = now.getHours().toString().padStart(2, '0');
          const minutes = now.getMinutes().toString().padStart(2, '0');
        //   const seconds = now.getSeconds().toString().padStart(2, '0');
          const year = now.getFullYear();
          const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
          const day = now.getDate().toString().padStart(2, '0');
          return `${year}-${month}-${day} ${hours}:${minutes}`;
        }
      };
      
      
      const [currentTime, setCurrentTime] = useState(DataTransfer.Now());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(DataTransfer.Now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);



const navigate = useNavigate();

  const [text, setText] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
        renderContent();
    };

    const renderContent = () => {
        return text.split('\n').map((line, index) => {
            
            if (line.startsWith('#')) {
                return <h2 key={index}>{line.slice(1).trim()}</h2>;
            } else if (line.startsWith('>')) {
                return <p key={index}>{line.slice(1).trim()}</p>;
            } else {
                return null;
            }
        });
    };



    return(
<div className="post-container">
    <div className="info-line">
        <h3>
            <RxAvatar /> {'Roland Artmeladze'}
        </h3>
        <div style={{ display: 'flex', paddingLeft: '25px' }}>
            <span><FaClock /> {currentTime} </span>
            <span><MdCategory /> About Project </span>
        </div>
    </div>

    <div className="text-container">
        <h2>Introducing My Personal Blog-Portfolio Application</h2>
        <p>
            I'm excited to share the latest update to my personal blog-portfolio application, built using React and TypeScript. This project is designed to provide a seamless and dynamic experience for users who want to explore my work, read blog posts, and engage with the content through comments.
        </p>

        <h2>Key Features:</h2>
        <p>
            1. <strong>Dynamic Blog Content:</strong> Users can easily read posts, add new ones, and leave comments. The entire experience is built to be interactive, making it easy to share thoughts and engage with the content.
        </p>
        <p>
            2. <strong>Real-Time Data Updates:</strong> When a user adds a new post or comment, it is instantly reflected in the database, thanks to the robust backend powered by Django REST Framework. This ensures that all users see the most up-to-date information without any delays.
        </p>
        <p>
            3. <strong>RESTful APIs for Seamless Integration:</strong> The backend of this application is built using Django REST Framework, providing reliable APIs that the frontend uses to fetch, create, and update data.
        </p>
        <p>
            4. <strong>User-Friendly Interface:</strong> The application is designed with an intuitive and responsive UI, ensuring that users have a smooth experience across all devices.
        </p>
        <p>
            5. <strong>Secure and Scalable:</strong> The project architecture is designed to be scalable, allowing for future growth and enhancements. Security best practices are also implemented to protect user data and ensure the integrity of the content.
        </p>

        <h2>How It Works:</h2>
        <p>
            - <strong>Frontend:</strong> The application’s frontend is built with React and TypeScript, providing a modern and responsive user experience.
        </p>
        <p>
            - <strong>Backend:</strong> The backend is handled by Django, which manages all the business logic, including the storage and retrieval of posts and comments.
        </p>
        <p>
            - <strong>API Integration:</strong> RESTful APIs ensure that the frontend and backend communicate effectively, providing real-time data updates and maintaining a smooth user experience.
        </p>
    </div>

    <div style={{ marginTop: '25px' }}>
        <samp onClick={()=>{
            navigate('./AboutProjec');
           }}>Read More</samp>
    </div>
</div>
    )
}

export default AboutProject;