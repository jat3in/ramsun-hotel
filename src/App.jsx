
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import WhatsAppButton from "./components/WhatsAppButton";

const Home  = lazy(()=>import("./Pages/Home"));
const AboutUs  = lazy(()=>import("./Pages/AboutUs"));


function App() {
  return <>
    <WhatsAppButton/>
    <Router>
        <div className="w-full h-full">
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/AboutUs" element={<AboutUs />} />
            </Routes>
          </Suspense>
        </div>
    </Router>
  </>;
}

export default App;
