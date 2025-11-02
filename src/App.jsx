import { Toaster } from "react-hot-toast";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import Layout from "./components/Layout/Layout.jsx";
import { PrivacyTermsPage } from "./pages/PrivacyTermsPage/PrivacyTermsPage.jsx";
import { OurStoryPage } from "./pages/OurStoryPage/OurStoryPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage.jsx";
import { Suspense } from "react";
import { Route, Routes } from "react-router";
import Loader from "./components/Loader/Loader.jsx";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyTermsPage />} />
            <Route path="/story" element={<OurStoryPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
