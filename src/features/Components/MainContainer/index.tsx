import "./MainContainer.css";

import Home from "@/features/Home";
import ProjectSection from "@/features/Projects";
// import About from "@/features/About";
import Footer from "../Footer";

function MainContainer() {
  return (
    <main>
      {/* Home Section */}
      <Home />
      {/* About Section */}
      {/* <About /> */}
      {/* Project Section */}
      <ProjectSection />
      <Footer />
    </main>
  );
}

export default MainContainer;
