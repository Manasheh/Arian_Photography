import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <>
    {/* <hr className='hr'/> */}
    <div className='hr'></div>
    <div className='footer container px-4'>
        <div className="footer-section footer-arian">
        <p className='title'>Arian Photography</p>
        <p>Explore the artistry and beauty captured through Arian's lens. From stunning landscapes to intimate portraits, discover a visual journey that transcends time.</p>
        </div>

        <div className="footer-section">
            <p className='title'>Contact Us</p>
            <p>arianthangboi@gmail.com</p>
            <p>+975-52-70-167-11</p>
            <p>Tiberias, Israel</p>
            <p>&copy; 2024 | All rights reserved</p>

        </div>
        <div className="footer-section">
            <p className='title'>Socials</p>
            <p>Follow us on:</p>
            <div>
            <a href="https://twitter.com/">Twitter</a>
            </div>
            <div>
            <a href="https://www.facebook.com/">Facebook</a>
            </div>
            <a href="https://www.instagram.com/">Instagram</a>
            <div>
            <a href="https://www.youtube.com/">Youtube</a>
            </div>
        </div>
    </div>
    </>
  );
}

export default Footer;
