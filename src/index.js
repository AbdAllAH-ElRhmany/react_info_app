import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./style/style.css";

const App = () => (
  <div>
    <Header />
    <MainContent />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
