import "./Live.css";

import LiveImages from "./LiveImage";
import ImageContainer from "./ImageContainer";
import { FaArrowRight } from "react-icons/fa";
import Download from "../Components/Download";

function LiveSection() {
  return (
    <section className="lives section" id="lives">
      <div className="circle lives_circleOne"></div>
      <div className="circle lives_circleThree"></div>

      <h2 className="section_title_">适合多种直播场景</h2>

      <div className="lives_container bd_grid">
        {LiveImages &&
          LiveImages.map((data: any) => (
            <ImageContainer
              key={data.id}
              imageName={data.imageName}
              title={data.title}
            />
          ))}
      </div>

      <Download
        style={{
          margin: "2rem auto 0",
        }}
      />
    </section>
  );
}

export default LiveSection;
