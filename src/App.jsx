import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState, Suspense, lazy } from "react";
import WhatsAppButton from "./components/WhatsAppButton";
import SignUpForm from "./components/SignUpForm";
import Layout from "./components/Layout";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsConditions from "./Pages/TermsConditions";
const Home = lazy(() => import("./Pages/Home"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 50000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg relative md:max-w-md max-w-sm w-full">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-2 right-2 text-gray-100 bg-green-600 hover:text-gray-200 hover:bg-green-500 rounded-full h-8 w-8 flex items-center justify-center"
        >
          ✕
        </button>

        {/* Heading */}
        {/* <h2 className="text-center text-xl font-bold text-orange-600 mb-4">
          Get Upto 30% OFF on Dubai Package
        </h2> */}

        {/* Form */}
        <section>
          <SignUpForm></SignUpForm>
        </section>
        {/* Disclaimer */}
      </div>
    </div>
  );
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <WhatsAppButton />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;