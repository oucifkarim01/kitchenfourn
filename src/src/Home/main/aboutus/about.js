function AboutUs() {
  return (
    <div
      className="aboutus-block fluid-container section-block"
      id="aboutus"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/about.jpg')`,
      }}
    >
      <div className="container aboutus-block__inner">
        <div className="row justify-content-md-end">
          <div className="col-md-5 about__box mr-5">
            <div className="text fw-light fs-5 text-primary mt-4">About</div>
            <div className="text title fw-bold text-uppercase fs-4 mt-2 text-white">
              Kitchen installation and forniture
            </div>
            <div className="text desc text-break fw-light mt-2 text-white">
              Kitchen installation and forniture get our last services and make
              it happends, Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </div>
            <button type="button" className="btn btn-secondary fw-bolder fs-6">
              SHOW MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
