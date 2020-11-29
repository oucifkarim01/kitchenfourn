import { Link } from "react-router-dom";

const products = [
  {
    name: "Fourn1",
    picture: `/assets/images/service_kit.jpg`,
  },
  {
    name: "Fourn2",
    picture: `/assets/images/service_kit1.jpg`,
  },
  {
    name: "Fourn3",
    picture: `/assets/images/header.jpg`,
  },
  {
    name: "Fourn4",
    picture: `/assets/images/about.jpg`,
  },
];

function Store() {
  return (
    <div className="store-block fluid-container section-block" id="projects">
      <div className="container store-block__inner">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row">
              <div className="section_title">
                <div className="text text-center fs-2">Our Store :</div>
              </div>
              <Link to="/product" className="section_content row">
                {products.map(({ name, picture }) => (
                  <div key={name} className="col-md-3 product__item">
                    <div
                      className="product_bg"
                      style={{
                        backgroundImage: `url('${process.env.PUBLIC_URL}${picture}')`,
                      }}
                    >
                      <div className="product_inner">
                        <div className="product_name fs-4 fw-light">{name}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </Link>
              <div className="row">
                <a
                  href="#products"
                  className="text mt-4 text-center viewall_button"
                >
                  View All
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
