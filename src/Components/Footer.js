import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";


const Footer = () => {
  return (
    <footer>
      <h4>Developed by Priyadharsini</h4>
      <h4>Copyright &copy; 2025 SP</h4>
      <div className='footerLinks'>
        <a href="https://github.com/priya123-jpg" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/priyadharsini01/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:priyadharsini2023@outlook.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer