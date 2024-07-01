import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../public/images/3.jpg';
import './Events.css';

function Events() {
  return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }} className="card-container pb-4">
        <h3 style={{ width: '100%', textAlign: 'center' }} className='p-2'>Weddings</h3>
        <Link to='/wed1'>
        <div className="card" style={{ width: '15rem', position: 'relative' }}>
          <img className="card-img-top" src={img1} alt="Card image cap" style={{ height: '10rem', objectFit: 'cover' }} />
          <p className='weds p-3'>Thang weds Kim</p>
        </div>
        </Link>
        <Link to='/wed2'>
        <div className="card" style={{ width: '15rem', position: 'relative' }}>
          <img className="card-img-top" src={img1} alt="Card image cap" style={{ height: '10rem', objectFit: 'cover' }} />
          <p className='weds p-3'>Ben weds Ruth</p>
        </div>
        </Link>
        <Link to='/wed3'>
        <div className="card" style={{ width: '15rem', position: 'relative' }}>
          <img className="card-img-top" src={img1} alt="Card image cap" style={{ height: '10rem', objectFit: 'cover' }} />
          <p className='weds p-3'>Simeon weds Elinor</p>
        </div>
        </Link>
        <Link to='/wed4'>
        <div className="card" style={{ width: '15rem', position: 'relative' }}>
          <img className="card-img-top" src={img1} alt="Card image cap" style={{ height: '10rem', objectFit: 'cover' }} />
          <p className='weds p-3'>Avihu weds D'vora</p>
        </div>
        </Link>
        <Link to='/wed5'>
        <div className="card" style={{ width: '15rem', position: 'relative' }}>
          <img className="card-img-top" src={img1} alt="Card image cap" style={{ height: '10rem', objectFit: 'cover' }} />
          <p className='weds p-3'>Elkana weds Leah</p>
        </div>
        </Link>
        <Link to='/wed6'>
        <div className="card" style={{ width: '15rem', position: 'relative' }}>
          <img className="card-img-top" src={img1} alt="Card image cap" style={{ height: '10rem', objectFit: 'cover' }} />
          <p className='weds p-3'>Yona weds Slomit</p>
        </div>
        </Link>
      </div>
  );
}

export default Events;
