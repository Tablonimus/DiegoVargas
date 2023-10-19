import React from "react";

export default function Video() {
  return (
    <scroll-page id="video">
      <div className="p-2">
        <span className="font-bold">VIDEO</span>
      </div>
      <div className="flex justify-center h-96 lg:h-[50em] bg-white/50 rounded-lg p-1 md:py-5 md:px-5">
        <iframe
          className="rounded-lg w-full h-full p-2"
          src="https://www.youtube.com/embed/AblOTiXH0Ps?si=7C4brt73oLz0kQwV"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </scroll-page>
  );
}
