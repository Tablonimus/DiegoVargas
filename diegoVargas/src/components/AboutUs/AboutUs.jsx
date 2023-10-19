import { Carousel } from "flowbite-react";
import React from "react";
import dv1 from "../../assets/carousel/dv1.jpg";
import dv2 from "../../assets/carousel/dv2.jpg";
import dv3 from "../../assets/carousel/dv3.jpg";
import dv4 from "../../assets/carousel/dv4.jpg";
import dv5 from "../../assets/carousel/dv5.jpg";
import logoSuela from "../../assets/logos/LogoSuelaNav.svg";

export default function AboutUs() {
  return (
    <scroll-page id="suela">
      <div className="p-2">
        <span className="font-bold">SUELA PRODUCCIONES</span>
      </div>
      <div className="flex justify-center">
        <div className=" relative flex flex-col h-56 md:h-96 w-2/3  md:w-10/12 bg-white/80 p-2 rounded-lg ">
          <section className="flex flex-col gap-2 justify-between items-center h-full text-black py-2">
            <img src={logoSuela} alt="" className="w-20 md:w-36 drop-shadow-2xl" />
            <span className="text-center text-sm md:text-xl">Producción de videos y webs personalizadas</span>
            <button className="py-2 px-6 rounded-lg border hover:bg-cyan-400 bg-cyan-500 text-white drop-shadow-2xl">Contacto</button>
            <span className="text-center text-sm md:text-3xl font-bold">CONVERTITE EN PROFESIONAL</span>
          </section>
       
            <img
              src={dv2}
              alt=""
              className="absolute left-[-4em] bottom-12 md:h-48 md:w-32 h-30 w-20  object-cover rounded-lg"
            />
            <img
              src={dv3}
              alt=""
              className="absolute right-[-4em] bottom-12 md:h-48 md:w-32 h-30 w-20 object-cover rounded-lg"
            />
      
        </div>
      </div>
    </scroll-page>
  );
}
