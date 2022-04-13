import React from "react";
import Footer from "./Footer";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();
    toast.promise(() =>  emailjs.sendForm(
      'service_an3y13o',
      'template_ds2nvir',
      e.target,
      'S3uHVkOSBCXYPk0bZ'
    ),{
      pending:"pending",
      success:"Email sent successfully!",
      error:"Sorry, something went wrong. Try again later."
    })
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
  }
  
  return (
    <>
      <section id="learn" className="p-5" style={{ background: "#d4d7da" }}>
        <div className="container">
          <div className="text-center">
            <h5 className="section-title  text-center text-primary ">Contact Us</h5>
            <h1 className="mb-5">Contact For Any Query</h1>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img
                src="./images/Contact-1.gif"
                className="img-fluid"
                alt=""
                style={{ borderRadius: "140px" }}
              />
            </div>
            <div className="col-md p-5">
              <form onSubmit={sendEmail}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        required
                        placeholder="Your Name"
                        style={{fontSize: '1.5rem'}}
                      />
                      <label style={{fontSize: '1rem'}} for="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        required
                        placeholder="Your Email"
                        style={{fontSize: '1.5rem'}}
                      />
                      <label style={{fontSize: '1rem'}} for="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        required
                        placeholder="Subject"
                        style={{fontSize: '1.5rem'}}
                      />
                      <label style={{fontSize: '1rem'}} for="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        name="message"
                        required
                        style={{ height: "150px", fontSize: '1.5rem' }}
                      ></textarea>
                      <label style={{fontSize: '1rem'}} for="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
