import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Offcanvas from "../components/common/Offcanvas";
import ServicesArea from "../components/pages/ServiceAndDetails/ServicesArea";

export default function Services() {
  return (
    <>
      <Header />
      <Offcanvas />
      <Breadcrumb title="Our Services" />
      <ServicesArea />
      <Footer />
    </>
  );
}
