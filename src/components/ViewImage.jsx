import React from 'react';
import './ViewImage.css';

function ViewImage({ selectedImage, onClose, onNext, onPrev }) {
    if (!selectedImage) return null;

    return (
        <div className="view-image-overlay">
            <div className="view-image-container">
                <button className="close-button" onClick={onClose}><i className="fas fa-times"></i></button>
                <button className="nav-button prev-button" onClick={onPrev}><i className="fas fa-chevron-left"></i></button>
                <img src={selectedImage.src} alt="Selected" className="view-image" />
                <button className="nav-button next-button" onClick={onNext}><i className="fas fa-chevron-right"></i></button>
            </div>
        </div>
    );
}

export default ViewImage;
