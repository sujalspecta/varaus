import { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="video-btn">
        <ul>
          <li>
            <button
              className="wrap"
              onClick={() => setIsOpen(true)}
            >
            </button>
          </li>
        </ul>
      </div>

      <VideoModal
        isOpen={isOpen}
        videoId="hQ0n9gxAAmc"
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default VideoSection;