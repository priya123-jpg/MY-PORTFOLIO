import React from 'react';
import ProjectBox from './ProjectBox';
import LittleLemonRestaurant from '../images/LittleLemonRestaurant.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My<b> Project</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={LittleLemonRestaurant} projectName="LittleLemonRestaurant" />
      </div>

    </div>
  )
}

export default Projects