import React from "react";
import {
  IoLocationOutline,
  IoMailOutline,
  IoCallOutline,
} from "react-icons/io5";

function Footer() {
  return (
    <footer
      className="footer fluid-container"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/header.jpg')`,
      }}
    >
      <div className="footer_inner ">
        <div className="footer_content">
          <div className="content-inner container ">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="row">
                  <div className="col-md-4 footer_block call_block">
                    <div className="block_title mb-4 text text-white text-capitalize fw-light fs-4">
                      Call or Visit Us :
                    </div>
                    <div className="block_content">
                      <ul>
                        <li>
                          <IoCallOutline />
                          <a href="tel:0666666666">+213-0666666666</a>
                        </li>
                        <li>
                          <IoLocationOutline />
                          <a>Bab Elzaouar Alger</a>
                        </li>
                        <li>
                          <IoMailOutline />
                          <a href="mailto:example@mail.com">example@mail.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-5 footer_block contact_block">
                    <div className="block_title mb-4 text text-white text-capitalize fw-light fs-4">
                      Contact Us :
                    </div>
                    <div className="block_content">
                      <form className="footer_form">
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Name"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="phone"
                            className="form-control"
                            id="phone"
                            placeholder="Phone"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Email"
                          />
                        </div>
                        <div className="mb-3">
                          <textarea
                            type="text"
                            className="form-control"
                            id="Message"
                            placeholder="Message"
                          />
                        </div>
                        <button
                          type="submit"
                          className="text-white btn btn-primary"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="col-md-3 footer_block links_block">
                    <div className="block_title mb-4 text text-white text-capitalize fw-light fs-4">
                      Useful Links :
                    </div>
                    <div className="block_content">
                      <ul>
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="">Products</a>
                        </li>
                        <li>
                          <a href="">Contact Us</a>
                        </li>
                        <li>
                          <a href="">About Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
