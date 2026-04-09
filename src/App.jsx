import "./styles/globals.css";

import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import Navbar        from "./components/Navbar/Navbar";
import Hero          from "./components/Hero/Hero";
import About         from "./components/About/About";
import Work          from "./components/Work/Work";
import Pack          from "./components/Pack/Pack";
import Services from   "./components/Services/Services";
import Contact       from "./components/Contact/Contact";
import Footer        from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="bg-[#000000] min-h-screen">

    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Services/>
      <Contact />
      <Footer />
    </>
    </div>

  );
}
