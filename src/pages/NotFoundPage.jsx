import Footer from "../components/common/Footer";
import ErrorContent from "../components/pages/notFound/ErrorContent";
import Breadcrumb from "../components/common/Breadcrumb";
import Header from "../components/common/Header";
import Offcanvas from "../components/common/Offcanvas";
export default function NotFoundPage() {
  return (
    <>
      <Header />
      <Offcanvas />
      <Breadcrumb title="Error Page" />
      <ErrorContent />
      <Footer />
    </>
  );
}
