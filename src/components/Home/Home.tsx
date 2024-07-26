import React, {useEffect, useState}from "react";
import './Home.css';

const YouName = () => {
    const title = 'Roland Artmeladze';
    const [name, setName] = useState('');
        useEffect(() => {
            title.split('').forEach((item, index) => {
                setTimeout(() => {
                    setName(prev => prev + item);
                }, index * 70);
            });
        }, [title]);

    return(<h1>{name}</h1>);
};


const YouRole = () => {
    const roletitle = 'Full Stake Web Developer';
    const [role, setRole] = useState('');

               useEffect(() => {
                    setTimeout(() => {
                        roletitle.split('').forEach((item, index) => {
                            setTimeout(() => {
                                setRole(prev => prev + item);
                            }, index * 50);

                            if(index === roletitle.length){
                            }
                        });
                    }, 1000);



                }, [roletitle]);

    return(<h2>{role}</h2>);
};


const Home = () => {



return(
        <section>
            <div style={{display: 'flex',
                flexDirection: 'column'}}>
                {YouName()}
                {YouRole()}
            </div>

        </section>
    );

};

export default Home;