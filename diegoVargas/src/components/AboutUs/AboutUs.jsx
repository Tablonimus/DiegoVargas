import React from "react";
import dv2 from "../../assets/player/diegoMockUpL.png";
import dv3 from "../../assets/player/diegoMockUpR.png";
import logoSuela from "../../assets/logos/LogoSuelaNav.svg";

export default function AboutUs() {
  return (
    <scroll-page id="suela">
      <div className="p-2">
        <span className="font-bold">SUELA PRODUCCIONES</span>
      </div>
      <div className="flex justify-center">
        <div className=" relative flex flex-col h-56 md:h-96 w-10/12  md:w-8/12 bg-white/80 p-2 rounded-lg ">
          <section className="flex flex-col gap-2 justify-between items-center h-full text-black py-2">
            <img
              src={logoSuela}
              alt=""
              className="w-20 md:w-36 drop-shadow-2xl"
            />
            <span className="text-center w-2/3 text-sm md:text-xl">
              Producciones digitales personalizadas
            </span>
            <a
              href="https://www.instagram.com/suelaproducciones"
              target="_blank"
            >
              <button className="py-2 px-6 rounded-lg md:w-96 border hover:bg-cyan-400 bg-cyan-500 text-white drop-shadow-2xl">
                <span className="Te">Contacto</span>
              </button>
            </a>
            <span className="text-center italic text-sm md:text-3xl font-smibold">
              CONVERTITE EN PROFESIONAL
            </span>
          </section>

          <img
            src={dv2}
            alt=""
            className="absolute left-[-7em] md:left-[-20em] bottom-[0em] md:bottom-[-4em] md:h-[30em]  h-44  object-contain rounded-lg drop-shadow-2xl"
          />
          <img
            src={dv3}
            alt=""
            className="absolute right-[-7em] md:right-[-18em] bottom-[1em] md:bottom-[-0.5em] md:h-[25em]  h-40 object-contain rounded-lg drop-shadow-2xl"
          />
        </div>
      </div>
    </scroll-page>
  );
}
