import Services from "./services/services";
import AboutUs from "./aboutus/about";
import OurProjects from "./projects/project";
import Store from "./store/store";

function MainContent() {
  return (
    <>
      <Services />
      <AboutUs />
      <OurProjects />
      <Store />
    </>
  );
}

export default MainContent;
