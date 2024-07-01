import React, { useState } from 'react';
import './Photography.css';
import ViewImage from './ViewImage';

// Import all images from the public folder
import img1 from '../../public/images/1.jpg';
import img2 from '../../public/images/2.jpg';
import img3 from '../../public/images/3.jpg';
import img4 from '../../public/images/4.jpg';
import img5 from '../../public/images/5.jpg';
import img6 from '../../public/images/6.jpg';
import img7 from '../../public/images/7.jpg';
import img8 from '../../public/images/8.jpg';
import img9 from '../../public/images/9.jpg';
import img10 from '../../public/images/10.jpg';
import img11 from '../../public/images/11.jpg';
import img12 from '../../public/images/12.jpg';
import img13 from '../../public/images/13.jpg';
import img14 from '../../public/images/14.jpg';
import img15 from '../../public/images/15.jpg';
import img16 from '../../public/images/16.jpg';
import img17 from '../../public/images/17.jpg';
import img18 from '../../public/images/18.jpg';
import img19 from '../../public/images/19.jpg';
import img20 from '../../public/images/20.jpg';

function Photography() {
    const images = [
        { id: 1, src: img1 },
        { id: 2, src: img2 },
        { id: 3, src: img3 },
        { id: 4, src: img4 },
        { id: 5, src: img5 },
        { id: 6, src: img6 },
        { id: 7, src: img7 },
        { id: 8, src: img8 },
        { id: 9, src: img9 },
        { id: 10, src: img10 },
        { id: 11, src: img11 },
        { id: 12, src: img12 },
        { id: 13, src: img13 },
        { id: 14, src: img14 },
        { id: 15, src: img15 },
        { id: 16, src: img16 },
        { id: 17, src: img17 },
        { id: 18, src: img18 },
        { id: 19, src: img19 },
        { id: 20, src: img20 }
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
