import React from "react";
import MainContent from "./MainContent";
import Footer from "./Footer";
import Navbar from "./NavBar";
import "../src/App.css";
function App() {
  return (
    <div className="app">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
