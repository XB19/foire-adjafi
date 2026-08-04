import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import APropos from "./pages/APropos";
import Adjafi14 from "./pages/Adjafi14";
import Adjafi13 from "./pages/Adjafi13";
import Adjafi12 from "./pages/Adjafi12";
import Adjafi11 from "./pages/Adjafi11";
import Adjafi10 from "./pages/Adjafi10";
import Adjafi1a9 from "./pages/Adjafi1a9";
import Exposez from "./pages/Exposez";
import Sponsorisez from "./pages/Sponsorisez";
import NosExposants from "./pages/NosExposants";
import Journal from "./pages/Journal";
import JournalPost from "./pages/JournalPost";
import ContactPage from "./pages/ContactPage";
import ScienceEnVac from "./pages/ScienceEnVac";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/adjafi-14" element={<Adjafi14 />} />
          <Route path="/adjafi-13" element={<Adjafi13 />} />
          <Route path="/adjafi-12" element={<Adjafi12 />} />
          <Route path="/adjafi-11" element={<Adjafi11 />} />
          <Route path="/adjafi-10" element={<Adjafi10 />} />
          <Route path="/adjafi-1-a-9" element={<Adjafi1a9 />} />
          <Route path="/sponsorisez" element={<Sponsorisez />} />
          <Route path="/exposez" element={<Exposez />} />
          <Route path="/nos-exposants" element={<NosExposants />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<JournalPost />} />
          <Route path="/science-en-vac" element={<ScienceEnVac />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
