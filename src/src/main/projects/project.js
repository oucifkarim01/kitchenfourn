function OurProjects() {
  return (
    <div className="projects-block fluid-container section-block" id="projects">
      <div className="container projects-block__inner">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-6">
                <div className="section__title">
                  <div className="text fs-3 text-capitalize">Our Projects:</div>
                  <div className="text desc text-lowercase">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta ducimus, magni tenetur voluptate fugit .
                  </div>
                  <div className="row">
                    <div className="project_item  col-md-6">
                      <img
                        className="img-fluid"
                        src="/assets/images/header.jpg"
                        alt="active project"
                      />
                    </div>
                    <div className="project_item  col-md-6">
                      <img
                        className="img-fluid"
                        src="/assets/images/header.jpg"
                        alt="active project"
                      />
                    </div>
                    <div className="project_item  col-md-6">
                      <img
                        className="img-fluid"
                        src="/assets/images/header.jpg"
                        alt="active project"
                      />
                    </div>
                    <div className="project_item  col-md-6">
                      <img
                        className="img-fluid"
                        src="/assets/images/header.jpg"
                        alt="active project"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex">
                <div className="active_project align-self-stretch d-flex">
                  <img
                    className="img-fluid shadow-lg"
                    src="/assets/images/header.jpg"
                    alt="active project"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <div className="btn up_btn">U</div>
          <div className="btn up_btn">D</div>
        </div>
      </div>
    </div>
  );
}

export default OurProjects;
