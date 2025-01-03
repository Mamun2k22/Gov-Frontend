import React, { useEffect, useRef } from "react";

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Append autoplay and mute parameters to the YouTube video URL
    if (videoRef.current) {
      videoRef.current.src += "&autoplay=1&mute=1";
    }
  }, []);

  return (
    <div className="flex justify-center items-center bg-white font-poppins mt-8">
      <iframe
        ref={videoRef}
        width="1024"
        height="700"
        src="https://www.youtube.com/embed/eIrRj6vDddU?si=PZiTQOBcfmAUW_Db"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
