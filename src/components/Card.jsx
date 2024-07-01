import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure FontAwesome CSS is imported
import './Card.css';
import img1 from '../../public/images/dollubollu.jpg';
import img2 from '../../public/images/monneo.jpg';
import img3 from '../../public/images/vahcy.jpg';

function TestimonialCarousel() {
 

  return (
      <section className="gradient-custom bg-black">
        <div className="container">
          <div className="text-center">
            <h3 className='display-4 text-center p-2 text-light'>Testimonials</h3>
            {/* Uncomment below if FontAwesome is properly set up */}
            {/* <i className="fas fa-quote-left fa-3x text-white"></i> */}
          </div>
          <div className="card">
            <div className="card-body px-2">
              <div id="carouselDarkVariant" className="carousel slide carousel-dark" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-indicators mb-0">
                  <button type="button" data-bs-target="#carouselDarkVariant" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselDarkVariant" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselDarkVariant" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner pb-1">
                  <div className="carousel-item active">
                    <div className="row d-flex justify-content-center">
                      <div className="col-lg-10 col-xl-8">
                        <div className="row">
                          <div className="col-lg-4 d-flex justify-content-center">
                            <img src={img1} className="rounded-circle shadow-1 mb-2 mb-lg-0" alt="woman avatar" width="100" height="100" />
                          </div>
                          <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                            <h5 className="mb-2">Yosef Haokip</h5>
                            <p className="mb-0 pb-4">
                              "Arian Photography and Videography is the best in the business! They are professional, creative, and a pleasure to work with. I highly recommend them for all your photography and videography needs."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="row d-flex justify-content-center">
                      <div className="col-lg-10 col-xl-8">
                        <div className="row">
                          <div className="col-lg-4 d-flex justify-content-center">
                            <img src={img2} className="rounded-circle shadow-1 mb-2 mb-lg-0" alt="woman avatar" width="100" height="100" />
                          </div>
                          <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                            <h5 className="mb-2">Monneo Dym's</h5>
                            <p className="mb-0 pb-4">
                              "Best photography and videography services with a personal touch! Arian Photography and Videography captured our special day beautifully. Highly recommended!"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="row d-flex justify-content-center">
                      <div className="col-lg-10 col-xl-8">
                        <div className="row">
                          <div className="col-lg-4 d-flex justify-content-center">
                            <img src={img3} className="rounded-circle shadow-1 mb-2 mb-lg-0" alt="woman avatar" width="100" height="100" />
                          </div>
                          <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                            <h5 className="mb-2">Vahcy Lhouvum</h5>
                            <p className="mb-0 pb-4">
                              "Cheap and best photography and videography services"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselDarkVariant" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselDarkVariant" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

        </div>
        <div className='order-container text-center mx-auto'>
          <p className="order-text text-center fw-light text-light">
            I am dedicated to providing exceptional service tailored to your unique needs. With a passion for capturing timeless moments, I offer a range of photography and videography services for weddings, bar-mitzvahs, bat-mitzvahs, and all types of events. Whether you're planning an intimate gathering or a grand celebration, I am committed to creating stunning visual narratives that exceed your expectations. Contact me today to discuss your vision, and take advantage of special discounts and personalized packages designed just for you.
          </p>
        </div>
      </section>
  );
}

export default TestimonialCarousel;
