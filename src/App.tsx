import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import "@/features/Components/Header/Header.css";
import Home from "@/features/Home";
import AppLayout from "@/layouts/AppLayout";
import About from "@/features/About";
import Tutor from "@/features/Tutor";
import MainContainer from "./features/Components/MainContainer";
import { BASE_URL } from "./utils/variables";

function App() {
  return (
    <>
      <BrowserRouter basename={BASE_URL}>
        <Routes>
          {/* <Route path="home" index element={<AppLayout />} /> */}
          <Route path="" element={<AppLayout />}>
            <Route index path="" element={<MainContainer />} />
            <Route path="home" element={<Home />} />
            <Route path="tutor" element={<Tutor />} />
          </Route>

          <Route path="about" element={<About />} />

          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
