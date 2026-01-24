import Header from "../components/common/Header";
import Offcanvas from "../components/common/Offcanvas";
import Breadcrumb from "../components/common/Breadcrumb";
import TeamDetailsArea from "../components/pages/TeamAndDetails/TeamDetailsArea";
import Footer from "../components/common/Footer";

export default function TeamDetails() {
  return (
    <>
      <Header />
      <Offcanvas />
      <Breadcrumb title="Team Details" />
      <TeamDetailsArea />
      <Footer />
    </>
  );
}
