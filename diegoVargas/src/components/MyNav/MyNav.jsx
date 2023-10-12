import React from "react";
import logoEquipo from "../../assets/logos/logoEquipo.svg";
import logoSuela from "../../assets/logos/LogoSuelaNav.svg";
import logoFace from "../../assets/logo-redes/facebook.png";
import instaScratch from "../../assets/logo-redes/instagramScratch.png";

export default function MyNav() {
  return (
    <div className="absolute top-0 w-screen flex flex-col items-center gap-3 p-2 z-30 ">
      <div className="w-11/12 flex justify-center items-center gap-5 bg-black py-2 px-5 rounded-lg h-8 text-[10px]">
        <button>VIDEO</button>
        <button>BIOGRAFIA</button>
        <button>FOTOGRAFIAS</button>
        {/* <button>ENTREVISTAS</button> */}
        <button>SUELA PRODUCCIONES</button>
      </div>

      <div className="w-full flex justify-between items-center px-5  h-16 bg-white rounded-lg ">
        <div className="w-1/3">
          <img src={logoSuela} alt="" className="w-10" />
        </div>
        <div className="w-1/3 flex justify-center">
          {" "}
          <img src={logoEquipo} alt="" className="w-10" />
        </div>
        <div className="w-1/3 flex justify-end items-center gap-1">
          <button>
            <img src={instaScratch} alt="" className="w-5 h-5 object-cover" />
          </button>
          <button>
            <img src={logoFace} alt="" className="w-5 h-5 object-cover" />
          </button>
          <button>
            <img src={instaScratch} alt="" className="w-5 h-5 object-cover" />
          </button>
          <button>
            <img src={logoFace} alt="" className="w-5 h-5 object-cover" />
          </button>
        </div>
      </div>
    </div>
  );
}
