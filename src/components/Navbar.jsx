import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ArianLogo from '../../public/images/logo/arian.jfif'

function Navbar() {
  const [activeLink, setActiveLink] = useState('Photography');
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsNavbarOpen(false); // Close navbar when a link is clicked
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen); // Toggle navbar state
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black pe-2">
      <div className="container-fluid px-0">
        <Link className="navbar-brand ps-3 text-white" to="/" onClick={() => handleNavLinkClick('Photography')}>
          <div className='logo'>
            <img src={ArianLogo} className='img' alt="" />
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNavbar} // Toggle navbar when hamburger menu is clicked
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-2">
              <Link
                className={`nav-link ${activeLink === 'Home' ? 'active' : ''}`}
                to="/"
                onClick={() => handleNavLinkClick('Home')}
              >
                Home
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link
                className={`nav-link ${activeLink === 'Photography' ? 'active' : ''}`}
                to="/photography"
                onClick={() => handleNavLinkClick('Photography')}
              >
                Photography
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link
                className={`nav-link ${activeLink === 'Videography' ? 'active' : ''}`}
                to="/videography"
                onClick={() => handleNavLinkClick('Videography')}
              >
                Videography
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link
                className={`nav-link ${activeLink === 'Events' ? 'active' : ''}`}
                to="/events"
                onClick={() => handleNavLinkClick('Events')}
              >
                Events
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link
                className={`nav-link ${activeLink === 'About' ? 'active' : ''}`}
                to="/about"
                onClick={() => handleNavLinkClick('About')}
              >
                About
              </Link>
            </li>
            <li className="nav-item me-35">
              <Link
                className={`nav-link ${activeLink === 'Contact' ? 'active' : ''}`}
                to="/contact"
                onClick={() => handleNavLinkClick('Contact')}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;






// import React, { useState } from 'react';
// import './Navbar.css'; // Import the custom CSS file
// import Videos from './Videos';

// function Navbar() {
//   const [activeLink, setActiveLink] = useState('Home');

//   const handleNavLinkClick = (linkName) => {
//     setActiveLink(linkName);
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-black">
//         <div className="container-fluid px-0">
//           <a className="navbar-brand ps-3 text-white" href="#">
//             <span>
//               <em>Arian</em>
//             </span>
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNavDropdown"
//             aria-controls="navbarNavDropdown"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse px-0" id="navbarNavDropdown">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item me-3">
//                 <a
//                   className={`nav-link ${activeLink === 'Photography' ? 'active' : ''}`}
//                   href="#"
//                   onClick={() => handleNavLinkClick('Photography')}
//                 >
//                   PHOTOGRAPHY
//                 </a>
//               </li>
//               <li className="nav-item me-3">
//                 <a
//                   className={`nav-link ${activeLink === 'Videography' ? 'active' : ''}`}
//                   href="#"
//                   onClick={() => handleNavLinkClick('Videography')}
//                 >
//                   VIDEOGRAPHY
//                 </a>
//               </li>
//               <li className="nav-item me-3">
//                 <a
//                   className={`nav-link ${activeLink === 'Events' ? 'active' : ''}`}
//                   href="#"
//                   onClick={() => handleNavLinkClick('Events')}
//                 >
//                   EVENTS
//                 </a>
//               </li>
//               <li className="nav-item me-3">
//                 <a
//                   className={`nav-link ${activeLink === 'About' ? 'active' : ''}`}
//                   href="#"
//                   onClick={() => handleNavLinkClick('About')}
//                 >
//                   ABOUT
//                 </a>
//               </li>
//               <li className="nav-item me-3">
//                 <a
//                   className={`nav-link ${activeLink === 'Contact' ? 'active' : ''}`}
//                   href="#"
//                   onClick={() => handleNavLinkClick('Contact')}
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <Videos />
//     </>
//   );
// }

// export default Navbar;
