import { BrowserRouter, Route, Routes } from "react-router-dom";
import { OffcanvasProvider } from "./contexts/OffcanvasContext";
import Offcanvas from "./components/common/Offcanvas";
import Home from "./pages/Home";
import HomeTwo from "./pages/HomeTwo";
import HomeThree from "./pages/HomeThree";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import BlogList from "./pages/BlogList";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Project from "./pages/Project";
import ProjectDetails from "./pages/ProjectDetails";
import ServiceDetails from "./pages/ServiceDetails";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import NotFoundPage from "./pages/NotFoundPage";
import BackToTop from "./components/ui/BackToTob";
import Cursor from "./components/ui/Cursor";
import ScrollToTop from "./components/ui/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <OffcanvasProvider>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hometwo" element={<HomeTwo />} />
        <Route path="/homethree" element={<HomeThree />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/bloglist" element={<BlogList />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/servicedetails" element={<ServiceDetails />} />
        <Route path="/project" element={<Project />} />
        <Route path="/projectdetails" element={<ProjectDetails />} />
        <Route path="/team" element={<Team />} />
        <Route path="/teamdetails" element={<TeamDetails />} />
        <Route path="/notfoundpage" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Offcanvas />
        <ScrollToTop />
        <BackToTop />
        <Cursor />
      </OffcanvasProvider>
    </BrowserRouter>
  );
}
