import Footer from "../components/common/Footer";
import ErrorContent from "../components/pages/notfound/ErrorContent";
import Breadcrumb from "../components/common/Breadcrumb";
import Header from "../components/common/Header";
import Offcanvas from "../components/common/Offcanvas";
export default function NotFoundPage() {
  return (
    <>
      <Header />
      <Offcanvas />
      <Breadcrumb breadcrumbData={{ title: "Error Page", current: "404" }} />
      <ErrorContent />
      <Footer />
    </>
  );
}
