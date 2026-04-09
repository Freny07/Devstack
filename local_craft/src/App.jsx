import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Discover from './pages/Discover';
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
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;