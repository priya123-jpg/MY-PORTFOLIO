import React from 'react';
import ProjectBox from './ProjectBox';
import TindogImage from '../images/TindogImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Project</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={TindogImage} projectName="Tindog" />
      </div>

    </div>
  )
}

export default Projects