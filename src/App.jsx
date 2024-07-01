import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Photography from './components/Photography';
import Videography from './components/Videography';
import Events from './components/Events';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Wed1 from './components/Wed1';
import Wed2 from './components/Wed2';
import Wed3 from './components/Wed3';
import Wed4 from './components/Wed4';
import Wed5 from './components/Wed5';
import Wed6 from './components/Wed6';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/videography" element={<Videography />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wed1" element={<Wed1 />} />
          <Route path="/wed2" element={<Wed2 />} />
          <Route path="/wed3" element={<Wed3 />} />
          <Route path="/wed4" element={<Wed4 />} />
          <Route path="/wed5" element={<Wed5 />} />
          <Route path="/wed6" element={<Wed6 />} />
          
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;








// import Navbar from "./components/Navbar"
// import './App.css'
// import Photography from './components/Photography'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Photography />
//       <Footer />
//     </>
//   )
// }

// export default App
