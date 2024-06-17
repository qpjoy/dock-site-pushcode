import "./MainContainer.css";

import Home from "@/features/Home";
// import About from "@/features/About";
import Footer from "../Footer";

import LiveSection from "@/features/Lives";
import Member from "@/features/Member";
import ContactDialog from "../Dialog/ContactDialog";
import { useState } from "react";

function MainContainer() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main>
      {/* Home Section */}
      <Home />
      {/* About Section */}
      {/* <About /> */}
      {/* Project Section */}
      <LiveSection />

      <Member setOpen={setOpen} />
      <Footer />

      <ContactDialog open={open} handleClose={handleClose} />
    </main>
  );
}

export default MainContainer;
