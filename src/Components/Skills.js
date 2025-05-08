import React from 'react'; 
import {FaReact, FaGitAlt, FaGithub, FaNpm, FaFigma} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";

const Skills = ({skill}) => {
    const icon = {
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
