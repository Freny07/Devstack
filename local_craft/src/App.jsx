import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Discover from './pages/Discover';
import Artisans from './pages/Artisans';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/artisans" element={<Artisans />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;