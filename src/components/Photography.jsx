import React, { useState } from 'react';
import './Photography.css';
import ViewImage from './ViewImage';


function Photography() {
    const images = [
        { id: 1, src: '../../public/images/1.jpg' },
        { id: 2, src: '../../public/images/2.jpg' },
        { id: 3, src: '../../public/images/3.jpg' },
        { id: 4, src: '../../public/images/4.jpg' },
        { id: 5, src: '../../public/images/5.jpg' },
        { id: 6, src: '../../public/images/6.jpg' },
        { id: 7, src: '../../public/images/7.jpg' },
        { id: 8, src: '../../public/images/8.jpg' },
        { id: 9, src: '../../public/images/9.jpg' },
        { id: 10, src: '../../public/images/10.jpg' },
        { id: 11, src: '../../public/images/11.jpg' },
        { id: 12, src: '../../public/images/12.jpg' },
        { id: 13, src: '../../public/images/13.jpg' },
        { id: 14, src: '../../public/images/14.jpg' },
        { id: 15, src: '../../public/images/15.jpg' },
        { id: 16, src: '../../public/images/16.jpg' },
        { id: 17, src: '../../public/images/17.jpg' },
        { id: 18, src: '../../public/images/18.jpg' },
        { id: 19, src: '../../public/images/19.jpg' },
        { id: 20, src: '../../public/images/20.jpg' }
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    const handleNext = () => {
        const currentIndex = images.findIndex(image => image.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[nextIndex]);
    };

    const handlePrev = () => {
        const currentIndex = images.findIndex(image => image.id === selectedImage.id);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[prevIndex]);
    };

    return (
        <>
        <div className="hr"></div>
        <div className='image-container'>
            <h3 style={{ color: 'white', letterSpacing: '0.5px', fontWeight: 'inherit' }}>PHOTOGRAPHY SHOWCASE</h3>
            {images.map((image) => (
                <div className='img-wrapper' key={image.id} onClick={() => handleImageClick(image)}>
                    <img src={image.src} alt="images" className='img' />
                    <div className='eye-icon'><i className="fas fa-eye"></i></div>
                </div>
            ))}
            <ViewImage 
                selectedImage={selectedImage} 
                onClose={handleClose} 
                onNext={handleNext} 
                onPrev={handlePrev} 
            />
            

        </div>
        </>
    );
}

export default Photography;
