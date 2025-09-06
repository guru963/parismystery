import React from "react";
import sampleVideo from "../assets/footer-video.mp4"; // replace with your video file

const FooterVideo
: React.FC = () => {
  return (
    <div className="w-full">
      <video
        src={sampleVideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-3/4 "
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default FooterVideo
;
