import React from 'react';
import Navigation from '../components/Navigation';

const home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
            <div className="content">
                <h1>Vergoz Alexis</h1>
                <h2>Développeur Full-Stack</h2>
                <div className="pdf">
                    <a href="./media/CV1.pdf" target="_blank">Télécharger CV</a>
                </div>
            </div>
            </div>
        </div>
    );
};

export default home;