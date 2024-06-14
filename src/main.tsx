import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import "@/features/Components/Header/Header.css";
// import "@/features/Components/Footer/Footer.css";
// import "@/features/Components/MainContainer/MainContainer.css";
import Header from "./features/Components/Header/index.tsx";
import MainContainer from "./features/Components/MainContainer/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Header />
    <MainContainer /> */}
    <App />
  </React.StrictMode>
);
