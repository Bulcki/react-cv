import React from 'react';
import Navigation from '../components/Navigation';
import ProjectList from '../components/Portfolio/projectList';

const portfolio = () => {
    return (
        <div className="portfolio">
            <Navigation/>
            <ProjectList/>
            
        </div>
    );
};

export default portfolio;