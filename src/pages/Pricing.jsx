import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Offcanvas from "../components/common/Offcanvas";
import FaqAreas from "../components/pages/faq/FaqAreas";
import PricingArea from "../components/pages/pricing/PricingArea";

export default function Pricing() {
  return (
    <>
      <Header />
      <Offcanvas />
      <Breadcrumb title="Pricing Plan" />
      <PricingArea />
      <FaqAreas />
      <Footer />
    </>
  );
}
