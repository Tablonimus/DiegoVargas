import React from "react";
import diegoEspalda from "../../assets/player/diegoEspaldaZip.png";
import diegoPelota1 from "../../assets/player/diegoPelota1Zip.png";
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
      <div className="path pt-32 md:pt-44 lg:px-24 h-screen relative main-container">
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
              className="fade-in z-20 absolute bottom-[-1em] right-40 md:right-[30em] w-48 lg:w-[25em] drop-shadow-2xl"
            />
            <></>
            <img
              src={diegoEspalda}
              alt=""
              className="fade-in-espalda absolute bottom-[-7.5em] md:bottom-[-10.5em] right-[0em] md:right-[2em] z-10  object-contain w-[35em] h-[35em] lg:w-[50em] lg:h-[60em] grayscale  "
            />
          </div>
        </div>
      </div>
      {/* ---SECCIONES-------- */}
      <scroll-container>
        <div className="flex flex-col bg-black/50 px-4 pb-14 lg:px-96 gap-5 z-40">
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
