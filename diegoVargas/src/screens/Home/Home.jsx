import React from "react";
import diegoEspalda from "../../assets/player/diegoEspalda.png";
import diegoPelota1 from "../../assets/player/diegoPelota1.png";
import Bio from "../../components/Bio/Bio";
import Video from "../../components/Video/Video";
import Images from "../../components/Images/Images";
import diegoText from "../../assets/images/diegoText.png";
import Honors from "../../components/Honors/Honors";
import AboutUs from "../../components/AboutUs/AboutUs";
import "./homeStyles.css";

export default function Home() {
  return (
    <div className="background-fix">
      {/*PORTADA PRINCIPAL */}
      <div className="path pt-32 md:pt-44 lg:px-24 relative main-container w-full h-screen">
        <div className=" flex flex-col">
          <div className="relative">
            <img
              src={diegoText}
              alt=""
              className="sticky ml-2 w-2/3 lg:w-1/3"
            />
          </div>
          <div className=" flex justify-center px-5 py-10">
            <img
              src={diegoPelota1}
              alt=""
              className="fade-in z-20 absolute bottom-[-1em] right-40 md:right-96 w-48 lg:w-1/5 drop-shadow-2xl"
            />
            <></>
            <img
              src={diegoEspalda}
              alt=""
              className="fade-in-espalda  absolute bottom-[-1em] md:bottom-[-2em] right-0 md:right-24 z-10 w-80 lg:w-1/3 grayscale  drop-shadow-2xl "
            />
          </div>
        </div>
      </div>
      {/* ---SECCIONES-------- */}
      <scroll-container>
        <div className="flex flex-col  bg-black/50 px-4 pb-14 lg:px-96 gap-5 z-40">
          <Bio />
          <Honors />
          <Video />
          <Images />
          <AboutUs />
        </div>
      </scroll-container>
    </div>
  );
}
