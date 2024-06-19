import { memo } from "react";
import Content from "./content.mdx";
import "./github.md.scss";
import "./Tutor.scss";
import Footer from "../Components/Footer";

function Tutor() {
  return (
    <div className="tutor">
      <div className="tutor-header"></div>
      <div className="tutor-content markdown-body section-box">
        <Content />
      </div>

      <Footer />
    </div>
  );
}

export default memo(Tutor);
