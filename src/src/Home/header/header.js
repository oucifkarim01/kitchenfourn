import React from "react";

import NavBar from "./navbar";

function Header() {
  return (
    <header
      className="header fluid-container"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/header.jpg')`,
      }}
    >
      <div className="header_inner">
        <NavBar />
        <div className="header_content">
          <div className="content-inner">
            <div className="header fs-4 fw-light">WELCOME TO REVA</div>
            <div className="header_title fs-1">
              KITCHEN & BATH QUALITY SERVICES
            </div>
            <button
              type="button"
              className="btn text-white btn-primary fw-light fs-6"
            >
              VIEW SERVICES
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
