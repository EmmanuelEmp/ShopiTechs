import React from "react";
import { FaEnvelope } from 'react-icons/fa'; // Import the email icon
import './css/Footer.css'
import instagram_icon from './Assets/instagram_icon.png'
import whatsapp_icon from './Assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className="footer py-4 bg-[#313133] text-white text-center ">
            <div className="footer-logo">
                <p>Shopi<span>Tech.</span></p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container social-icon">
                    <img src={instagram_icon} alt="" style={{ filter: "invert(1)" }} />
                </div>
                <div className="footer-icons-container social-icon ">
                    <img src={whatsapp_icon} alt="" style={{ filter: "invert(1)" }} />
                </div>
                <div className="footer-icons-container">
                 <a href="mailto:emmyochogwu@gmail.com" className="social-icon">
                    <FaEnvelope className="social-icon" />
                 </a>
                </div>

            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Right Reserved. Powered by Eminet Tech.</p>
            </div>
        </div>
    )
}

export default Footer;
