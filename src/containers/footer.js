import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'
import {FaTwitter} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
import {FaGoogle} from "react-icons/fa"
import logo from '../assets/logo.png';



export function FooterContainer() {
    return (
        <Footer>                
        <div style={{float:"right"}} >
            <img   src={logo} alt="Logo" /> 
        </div>
        <Footer.Wrapper>
     <Footer.Row>

          <Footer.Column>
             <Footer.Title>Follow Us</Footer.Title>
                <div style={{ borderTop: "5px solid #000000 "}}></div>
                
                   <br></br>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" /> <FaFacebook/> Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" /> <FaInstagram /> Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" /> <FaYoutube/> Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" /> <FaTwitter /> Twitter</Footer.Link>

                <Footer.Title>Contact Us</Footer.Title>
                    <div style={{ borderTop: "5px solid #000000 "}}></div>
                
                <br></br>
                <Footer.Link href="#"> <FaGoogle />   falanadimkana@gmail.com</Footer.Link>

                
                </Footer.Column>
            </Footer.Row>
           
                
            
            </Footer.Wrapper>
        </Footer>
    )
}