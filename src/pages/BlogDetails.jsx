import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Offcanvas from "../components/common/Offcanvas";
import Breadcrumb from "../components/common/Breadcrumb";
import BlogDetailsArea from "../components/pages/blogListAndDetails/BlogDetailsArea";

export default function BlogDetails() {
  return (
    <>
      <Header />
      <Offcanvas />
      <Breadcrumb title="Blog Details" />
      <BlogDetailsArea />
      <Footer />
    </>
  );
}
