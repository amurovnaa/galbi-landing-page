import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout/Layout.jsx";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Loader from "./components/Loader/Loader.jsx";
import { Router } from "lucide-react";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";

const HomePage = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./pages/HomePage/HomePage")), 2000)
    )
);
const PrivacyTermsPage = lazy(() =>
  import("./pages/PrivacyTermsPage/PrivacyTermsPage")
);
const OurStoryPage = lazy(() => import("./pages/OurStoryPage/OurStoryPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
function App() {
  return (
    <>
      <ScrollToTop />
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
