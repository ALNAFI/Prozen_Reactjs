import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Offcanvas from "../components/common/Offcanvas";
import AboutArea from "../components/pages/aboutUs/AboutArea";
import ProcessArea from "../components/pages/aboutUs/ProcessArea";
import StatsArea from "../components/pages/aboutUs/StatsArea";
import ChooseArea from "../components/pages/aboutUs/ChooseArea";
import TeamArea from "../components/pages/aboutUs/TeamArea";
import TestimonialsArea from "../components/pages/aboutUs/TestimonialsArea";

export default function AboutUs() {
  return (
    <>
      <Header />
      <Offcanvas />
      <Breadcrumb title="About Us" />
      <AboutArea />
      <ProcessArea />
      <StatsArea />
      <ChooseArea />
      <TeamArea />
      <TestimonialsArea />
      <Footer />
    </>
  );
}
