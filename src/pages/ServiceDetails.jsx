import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Offcanvas from "../components/common/Offcanvas";
import Breadcrumb from "../components/common/Breadcrumb";
import ServiceDetailsArea from "../components/pages/ServiceAndDetails/ServiceDetailsArea";

export default function ServiceDetails() {
  return (
    <>
      <Header />
      <Offcanvas />
      <Breadcrumb title="Service Details" />
      <ServiceDetailsArea />
      <Footer />
    </>
  );
}
