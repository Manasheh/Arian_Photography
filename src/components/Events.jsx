import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../public/images/3.jpg';
import './Events.css';

function Events() {
  return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }} className="p-2 card-container">
        <h3 style={{ width: '100%', textAlign: 'center' }}>Weddings</h3>
        <Link to='/wed1'>
        <div className="card" style={{ width: '12rem', position: 'relative' }}>
          <img className="card-img-top" src={img1} alt="Card image cap" style={{ height: '10rem', objectFit: 'cover' }} />
          <p className='weds'>Thang weds Kim</p>
        </div>
        </Link>
        <Link to='/wed2'>
        <div className="card" style={{ width: '12rem', position: 'relative' }}>
          <img className="card-img-top" src={img1} alt="Card image cap" style={{ height: '10rem', objectFit: 'cover' }} />
          <p className='weds'>Ben weds Ruth</p>
        </div>
        </Link>
        <Link to='/wed3'>
        <div className="card" style={{ width: '12rem', position: 'relative' }}>
          <img className="card-img-top" src={img1} alt="Card image cap" style={{ height: '10rem', objectFit: 'cover' }} />
          <p className='weds'>Simeon weds Elinor</p>
        </div>
        </Link>
        <Link to='/wed4'>
        <div className="card" style={{ width: '12rem', position: 'relative' }}>
          <img className="card-img-top" src={img1} alt="Card image cap" style={{ height: '10rem', objectFit: 'cover' }} />
          <p className='weds'>Avihu weds D'vora</p>
        </div>
        </Link>
        <Link to='/wed5'>
        <div className="card" style={{ width: '12rem', position: 'relative' }}>
          <img className="card-img-top" src={img1} alt="Card image cap" style={{ height: '10rem', objectFit: 'cover' }} />
          <p className='weds'>Elkana weds Leah</p>
        </div>
        </Link>
        <Link to='/wed6'>
        <div className="card" style={{ width: '12rem', position: 'relative' }}>
          <img className="card-img-top" src={img1} alt="Card image cap" style={{ height: '10rem', objectFit: 'cover' }} />
          <p className='weds'>Yona weds Slomit</p>
        </div>
        </Link>
        
      </div>
  );
}

export default Events;
