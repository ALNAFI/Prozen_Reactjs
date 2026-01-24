import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Offcanvas from "../components/common/Offcanvas";
import ProjectContent from "../components/pages/projectDetails/ProjectContent";

export default function ProjectDetails() {
  return (
    <>
      <Header />
      <Offcanvas />
      <Breadcrumb title="Project Details" />
      <ProjectContent />
      <Footer />
    </>
  );
}
