// ================= Router =================
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ================= Providers =================
import { OffcanvasProvider } from "./contexts/OffcanvasContext";
import { LenisProvider } from "./contexts/LenisContext";

// ================= Global UI =================
import Offcanvas from "./components/common/Offcanvas";
import BackToTop from "./components/ui/BackToTop";
import Cursor from "./components/ui/Cursor";
import ScrollToTop from "./components/ui/ScrollToTop";
import AOSInit from "./components/ui/AOSInit";

// ================= Pages =================
import Home from "./pages/Home";
import HomeTwo from "./pages/HomeTwo";
import HomeThree from "./pages/HomeThree";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Project from "./pages/Project";
import ProjectDetails from "./pages/ProjectDetails";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import BlogList from "./pages/BlogList";
import BlogDetails from "./pages/BlogDetails";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";


export default function App() {
  return (
    <LenisProvider>
    <BrowserRouter>
      <OffcanvasProvider>
        <AOSInit />
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
    </LenisProvider>
  );
}
