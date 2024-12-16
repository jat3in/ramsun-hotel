import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState, Suspense, lazy } from "react";
import WhatsAppButton from "./components/WhatsAppButton";
import SignUpForm from "./components/SignUpForm";
import Layout from "./components/Layout";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsConditions from "./Pages/TermsConditions";
const Home = lazy(() => import("./Pages/Home"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));

import logo from "./assets/logo.png";
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
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
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

const LoadingScreen = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "Welcome to luxury and comfort in the heart of Shillong",
    "Experience the finest hospitality in Meghalaya",
    "Your perfect stay awaits at Ramson Stay Inn",
    "Creating memorable experiences since 2020",
    "Rated 4.3/5 by our valued guests",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000); // Switch message every 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center min-h-screen">
      <div className="animate-bounce mb-8">
        <div className="h-20 w-20 rounded-full border-2 border-primary p-2">
          <img
            src={logo}
            alt="Ramson Stay Inn"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <h1 className="text-3xl font-bold text-primary mb-4">Ramson Stay Inn</h1>

      <div className="flex items-center gap-2 mb-8">
        <div className="w-3 h-3 rounded-full bg-primary animate-pulse delay-100"></div>
        <div className="w-3 h-3 rounded-full bg-primary animate-pulse delay-200"></div>
        <div className="w-3 h-3 rounded-full bg-primary animate-pulse delay-300"></div>
      </div>

      <div className="text-center max-w-sm px-4">
        <p className="text-gray-600 italic animate-fade-in key={messages[messageIndex]}">
          "{messages[messageIndex]}"
        </p>
      </div>
    </div>
  );
};
