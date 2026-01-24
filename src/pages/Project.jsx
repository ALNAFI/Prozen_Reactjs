import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Offcanvas from "../components/common/Offcanvas";
import Breadcrumb from "../components/common/Breadcrumb";
import ProjectCards from "../components/pages/project/ProjectCards";
export default function Project() {
  return (
    <>
      <Header />
      <Offcanvas />
      <Breadcrumb title="Our Projects" />
      <ProjectCards />
      <Footer />
    </>
  );
}
