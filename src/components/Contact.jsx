import React from 'react';
import './Contact.css'; // Ensure this file contains your hover styles

function Contact() {
  return (
    <div className="pb-3 bg-black">
      <div className="row bg-dark p-3">
        <div className="col-lg-8 mx-auto">
          <div className="mt-2 mx-auto p-1">
            <div className="card-body bg-dark">
              <form 
                id="contact-form" 
                role="form" 
                action="https://formspree.io/f/xvgpoodn" 
                method="POST"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="form_name" className="text-white">Firstname *</label>
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Please enter your firstname *"
                          required="required"
                          data-error="Firstname is required."
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="form_email" className="text-white">Email *</label>
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Please enter your email *"
                          required="required"
                          data-error="Valid email is required."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="form_phone" className="text-white">Phone *</label>
                        <input
                          id="form_phone"
                          type="phone"
                          name="phone"
                          className="form-control"
                          placeholder="Please enter your Phone Number *"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="form_need" className="text-white">Please specify your need *</label>
                        <select
                          id="form_need"
                          name="need"
                          className="form-control"
                          required="required"
                          data-error="Please specify your need."
                        >
                          <option value="" selected disabled>--Select Your Issue--</option>
                          <option>Request Photography Service</option>
                          <option>Request Videography Service</option>
                          <option>Bar Mitzvah/ Bath Mitzvah</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="form_message" className="text-white">Message *</label>
                        <textarea
                          id="form_message"
                          name="message"
                          className="form-control"
                          placeholder="Write your message here."
                          rows="4"
                          required="required"
                          data-error="Please, leave us a message."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <input
                        type="hidden"
                        name="_next"
                        value="https://your-website.com/thank-you"
                      />
                      <input
                        type="submit"
                        className="btn btn-send pt-2 bg-white text-black fw-bold submit-button"
                        style={{ width: '100%' }}
                        value="Send Message"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
