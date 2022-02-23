import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <section id="learn" class="p-5" style={{ background: "#d4d7da" }}>
        <div class="container">
          <div class="text-center">
            <h5 class="section-title  text-center text-primary ">Contact Us</h5>
            <h1 class="mb-5">Contact For Any Query</h1>
          </div>
          <div class="row align-items-center justify-content-between">
            <div class="col-md">
              <img
                src="./images/Contact-1.gif"
                class="img-fluid"
                alt=""
                style={{ borderRadius: "140px" }}
              />
            </div>
            <div class="col-md p-5">
              <form>
                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label for="name">Your Name</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label for="email">Your Email</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                      <label for="subject">Subject</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating">
                      <textarea
                        class="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "150px" }}
                      ></textarea>
                      <label for="message">Message</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary w-100 py-3" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
