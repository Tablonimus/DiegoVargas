import React from "react";
import diegoEspalda from "../../assets/player/diegoEspalda.png";
import diegoPelota1 from "../../assets/player/diegoPelota1.png";
import logoFondo from "../../assets/logos/flamengo.png";
import "./homeStyles.css";
import Bio from "../../components/Bio/Bio";
import Video from "../../components/Video/Video";
import Images from "../../components/Images/Images";
import diegoText from "../../assets/images/diegoText.png"
import Honors from "../../components/Honors/Honors";

export default function Home() {
  return (
    <div className="background-fix">
      {/*PORTADA PRINCIPAL */}
      <div className="pt-32 relative main-container w-full h-screen">
        <div className="flex flex-col">
          {/* <span className="text-3xl text-white font-bold">DIEGO</span>
          <span className="text-6xl text-white font-bold">VARGAS</span> */}
          <img src={diegoText} alt="" className="fixed ml-2 w-2/3" />
          <div className=" flex justify-center px-5 py-10">
            {/* <img src={logoFondo} alt="" className=" w-96 opacity-50" /> */}

            <img
              src={diegoPelota1}
              alt=""
              className="fade-in z-20 absolute bottom-0 right-40 w-48 drop-shadow-2xl"
            />
             <></>
            <img 
              src={diegoEspalda}
              alt=""
              className="fade-in-espalda  absolute bottom-0 right-0 z-10 w-80 grayscale  drop-shadow-2xl "
            />
          </div>
        </div>
      </div>
      {/* ----------- */}
      <div className="flex flex-col bg-black/50 px-4 gap-5">
        <Bio/>
        <Honors/>
        <Video/>
        <Images/>
      </div>
    </div>
  );
}
