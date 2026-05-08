import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Highlights from "./components/Highlights.jsx";
import About from "./components/About.jsx";
import DirectorMessage from "./components/DirectorMessage.jsx";
import AcademicsAdmissions from "./components/AcademicsAdmissions.jsx";
import Facilities from "./components/Facilities.jsx";
import Gallery from "./components/Gallery.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Notices from "./components/Notices.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { useTheme } from "./hooks/useTheme.js";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main id="main-content">
        <Hero />
        <Highlights />
        <About />
        <DirectorMessage />
        <AcademicsAdmissions />
        <Facilities />
        <Gallery />
        <Testimonials />
        <Notices />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
