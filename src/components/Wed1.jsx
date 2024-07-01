import React, { useState } from 'react';
import './Photography.css';
import ViewImage from './ViewImage';
// Import all images from the public folder
import img1 from '../../public/wed1/images/1.jpg';
import img2 from '../../public/wed1/images/2.jpg';
import img3 from '../../public/wed1/images/3.jpg';
import img4 from '../../public/wed1/images/4.jpg';
import img5 from '../../public/wed1/images/5.jpg';
import img6 from '../../public/wed1/images/6.jpg';
import img7 from '../../public/wed1/images/7.jpg';
import img8 from '../../public/wed1/images/8.jpg';
import img9 from '../../public/wed1/images/9.jpg';
import img10 from '../../public/wed1/images/10.jpg';
import img11 from '../../public/wed1/images/11.jpg';
import img12 from '../../public/wed1/images/12.jpg';
import img13 from '../../public/wed1/images/13.jpg';
import img14 from '../../public/wed1/images/14.jpg';
import img15 from '../../public/wed1/images/15.jpg';
import img16 from '../../public/wed1/images/16.jpg';
import img17 from '../../public/wed1/images/17.jpg';
import img18 from '../../public/wed1/images/18.jpg';
import img19 from '../../public/wed1/images/19.jpg';
import img20 from '../../public/wed1/images/20.jpg';
// import video from '../../public/web1/video1.mp4';
import video from '../../public/video/wed1.mp4';
import './Wed1_Video.css'



function Web1() {
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
        <div className='web1-container'>
            <div className="hr"></div>
            <div className='p-3 bg-black text-light'>
            <h3 style={{ color: 'white', letterSpacing: '0.5px', fontWeight: 'inherit'}} className='text-center'>Thang Weds Kim</h3>
              <p>
              Our story began in the vibrant streets of our city. Thang, with his camera capturing life's fleeting moments, and Kim, with her keen eye for beauty in art, first crossed paths at a bustling market. It was here that a shared passion for creativity sparked conversations that soon blossomed into a deep connection. Through laughter, shared adventures, and mutual respect for each other's talents, our friendship grew into a love that we now celebrate every day. Today, we continue to capture life's precious moments together, forever grateful for the serendipitous day our paths intertwined.
              </p>
            </div>
            <div className='image-container'>
                
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
              <div class="container p-3 bg-black">
                <h3 className='text-center pb-2'>Thang and Kim's Khuppah</h3>
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div className="video-container">
                      <video width="100%"  autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <h3></h3>
                    <p className='text-light'>
                    The Joyous Khuppah Ceremony: Thang and Kim's Khuppah ceremony was a beautiful blend of tradition and emotion. Under the adorned canopy, they exchanged heartfelt vows, surrounded by the warm embrace of family and friends. Their love story, which began in the bustling market, has now found its pinnacle in this sacred moment, celebrating their union and the beginning of their lifelong journey together.
                    </p>
                </div>
              </div>
          </div>
        </div>
    );
}

export default Web1;
