import { Routes, Route, Outlet } from "react-router-dom";
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
import ExposantDetail from "./pages/ExposantDetail";
import Journal from "./pages/Journal";
import JournalPost from "./pages/JournalPost";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

import { AuthProvider } from "./admin/context/AuthContext";
import RequireAuth from "./admin/components/RequireAuth";
import AdminLayout from "./admin/layouts/AdminLayout";
import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import Messages from "./admin/pages/Messages";
import Articles from "./admin/pages/Articles";
import ArticleForm from "./admin/pages/ArticleForm";
import ExposantsAdmin from "./admin/pages/Exposants";
import ExposantForm from "./admin/pages/ExposantForm";
import Partners from "./admin/pages/Partners";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<PublicLayout />}>
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
          <Route path="/nos-exposants/:slug" element={<ExposantDetail />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<JournalPost />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <AdminLayout />
            </RequireAuth>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="messages" element={<Messages />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/nouveau" element={<ArticleForm />} />
          <Route path="articles/:id" element={<ArticleForm />} />
          <Route path="exposants" element={<ExposantsAdmin />} />
          <Route path="exposants/nouveau" element={<ExposantForm />} />
          <Route path="exposants/:id" element={<ExposantForm />} />
          <Route path="partenaires" element={<Partners />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
