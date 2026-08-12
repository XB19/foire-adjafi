import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import Activities from "../components/Activities";
import Sponsors from "../components/Sponsors";
import Exhibitors from "../components/Exhibitors";
import Gallery from "../components/Gallery";
import Blog from "../components/Blog";
import EditionHighlights from "../components/EditionHighlights";
import Flyers from "../components/Flyers";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Blog />
      <Flyers />
      <EditionHighlights />
      <Countdown />
      <Activities />
      <Sponsors />
      <Exhibitors />
      <Gallery />
      <Contact />
    </>
  );
}
