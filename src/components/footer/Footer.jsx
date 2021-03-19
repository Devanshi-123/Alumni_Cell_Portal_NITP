import React, { Component }  from 'react';
import "./Footer.css";
import facebook_icon from "../../assets/facebook_icon.png";
import gmail from "../../assets/gmail.png";
import instagram_icon from "../../assets/instagram_icon.png";
// import github from '../../assets/github.png';
import linkin_logo from "../../assets/linkin_logo.png";
function Footer() {
  return (
    <div className="homepage-footer" id="homepage-footer">
      <div className="footer2">
        <p className="ff4">
           &copy; ALUMNI <span className="ff5"> CELL</span> 
          
        </p>
        <div className="ff6">
           National Institute of Technology Patna<br/>Mahendru, Ashok Rahpath<br/>
           Patna, Bihar 800005
        </div>

        <div className="social-footer">
          <a href="https://www.facebook.com/NITPAlumni/ " target="_blank" rel="noreferrer">
            <img
              src={facebook_icon}
              alt="fb"
              className="footer-icon facebook"
            />
          </a>
          <a href="https://www.linkedin.com/company/alumni-cell-nit-patna/mycompany/" target="_blank" rel="noreferrer">
            <img
              src={linkin_logo}
              alt="insta"
              className="footer-icon linkin"
            />
          </a>
          <a href="https://www.linkedin.com/company/alumni-cell-nit-patna/mycompany/" target="_blank" rel="noreferrer">
            <img
              src={gmail}
              alt="tweet"
              className="footer-icon twitter"
            />
          </a>
          <a href="https://www.facebook.com/NITPAlumni/" target="_blank" rel="noreferrer">
            <img
              src={instagram_icon}
              alt="insta"
              className="footer-icon instagram"
            />
          </a>

        </div>
      </div>
    </div>
  );
}

export default Footer;
