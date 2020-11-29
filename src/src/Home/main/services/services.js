import { SvgIcon2, SvgIcon1 } from "./ServicesIcons";

function Services() {
  return (
    <div className="services-block fluid-container section-block" id="services">
      <div className="container services-block__inner">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="section-block__text">
              <div className="title fs-3 fw-light">Our Services:</div>
              <div className="text mt-1 text-break fw-light  ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
                unde! Tempora.
              </div>
            </div>
            <div className="section-block__content row">
              <div className="services__item col-md-6">
                <div
                  className="service_bg"
                  style={{
                    backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/service_kit.jpg')`,
                  }}
                >
                  <div className="service__inner">
                    <div className="d-flex d-flex align-items-end mb-2">
                      <SvgIcon1 />
                      <div className="text fw-light text-uppercase ml-3">
                        Kitchen Installlation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="services__item col-md-6">
                <div
                  className="service_bg"
                  style={{
                    backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/service_kit1.jpg')`,
                  }}
                >
                  <div className="service__inner">
                    <div className="d-flex d-flex align-items-end mb-2">
                      <SvgIcon2 />
                      <div className="text fw-light text-uppercase ml-3">
                        Fournitures
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
