import Hero from "../components/Hero";
import About from "../components/About";
import Countdown from "../components/Countdown";
import Activities from "../components/Activities";
import Sponsors from "../components/Sponsors";
import Exhibitors from "../components/Exhibitors";
import Gallery from "../components/Gallery";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Countdown />
      <Activities />
      <Sponsors />
      <Exhibitors />
      <Gallery />
      <Blog />
      <Contact />
    </>
  );
}
