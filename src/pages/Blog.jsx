import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Offcanvas from "../components/common/Offcanvas";
import BlogArea from "../components/pages/blog/BlogArea";

export default function Blog() {
  return (
    <>
      <Header />
      <Offcanvas />
      <Breadcrumb title="Our Blog" />
      <BlogArea />
      <Footer />
    </>
  );
}
