import React, { Fragment } from 'react';
import video from '../../public/video/video1.mp4';
import './Video.css';

function Videos() {
  return (
    <Fragment>
      <div className='videos-component'>
        <div className="video-container">
          <video width="100%" autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='event mx-auto'>
          <h3 className="display-4 text-center mt-1 p-2">Arian Photography & Videography for all events.</h3>
          <p className="text-center fw-light">
            We are a boutique Candid Photography and Videography Studio based in Tiberias, Israel and are known for a fun, off-beat, and modern approach to creating stories from the best day in your life. Assisted by Yosef Sasat Haokip, Arian Photography and Videography has been capturing moments since 2008, creating tens of unique love stories across Israel. We are passionate, hard-working, and incredibly motivated; we specialize in photography and videography for weddings, bar-mitzvahs, bat-mitzvahs, and all types of events, and can’t wait to be a part of yours!
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Videos;
