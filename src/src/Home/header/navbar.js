const NavBarList = [
  { name: "Home", url: "/" },
  { name: "Services", url: "#services" },
  { name: "About Us", url: "#about" },
  { name: "Projects", url: "#projects" },
  { name: "Shop", url: "/shop" },
];

function NavBar() {
  return (
    <div className="header_navbar">
      <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
        <div className="container">
          <a className="navbar-brand" href="/">
            REVALOGO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#header_nav_content"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="header_nav_content">
            {/* flex-grow-1 justify-content-center */}
            <ul className="navbar-nav ml-5 mb-2 mb-lg-0 ">
              {NavBarList.map(({ name, url }) => (
                <li key={name} className="nav-item active">
                  <a className="nav-link" href={url}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="action-button">schedule installation</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
