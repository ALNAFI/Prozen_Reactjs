import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Offcanvas from "../components/common/Offcanvas";
import Breadcrumb from "../components/common/Breadcrumb";
import FaqAreas from "../components/pages/faq/FaqAreas";
import Testimonials from "../components/pages/faq/Testimonials";

export default function Faq() {
  return (
    <>
      <Header />
      <Offcanvas />
      <Breadcrumb title="FAQS" />
      <FaqAreas />
      <Testimonials />
      <Footer />
    </>
  );
}
