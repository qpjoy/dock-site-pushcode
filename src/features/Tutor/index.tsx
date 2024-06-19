import { memo } from "react";
import Content from "./content.mdx";
import "./github.md.scss";
import "./Tutor.scss";

function Tutor() {
  return (
    <div className="tutor">
      <div className="tutor-header"></div>
      <div className="tutor-content markdown-body">
        <Content />
      </div>
    </div>
  );
}

export default memo(Tutor);
