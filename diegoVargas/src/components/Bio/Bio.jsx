import React from "react";
import canchaTermica from "../../assets/images/canchaTermica.png";
import cafs from "../../assets/logos/logo-CAFS.png"
import cfsp from "../../assets/logos/logo-CFSP.png"
import "./bioStyles.css"

export default function Bio() {
  return (
    <div>
      <div className="p-2">
        <span className="font-bold">BIOGRAFÍA</span>
      </div>
      <div className="bg-white text-black rounded-lg p-2">
        <span className="title font-semibold text-xl">DIEGO VARGAS</span>
        <div className="flex gap-2">

          <div>
            <section>
              <span className="text-[0.7em] font-semibold">NACIMIENTO </span>{" "}
              <span className="text-[0.7em] text-red-500 font-semibold">
                {" "}
                14/10/1996
              </span>
            </section>
            <section>
              <span className="text-[0.7em] font-semibold">PAIS </span>{" "}
              <span className="text-[0.7em] text-red-500 font-semibold">
                ARGENTINA
              </span>
            </section>
            <section>
              <span className="text-[0.7em] font-semibold">DEBUT </span>{" "}
              <span className="text-[0.7em] text-red-500 font-semibold"> 2014</span>
            </section>
            <section>
              <span className="text-[0.7em] font-semibold">POSICIÓN </span>{" "}
              <span className="text-[0.7em] text-red-500 font-semibold">
                PIVOTE/ALA
              </span>
            </section>
          </div>

          <div className="flex  drop-shadow-2xl justify-end items-center">
            {/* <img
              src={diegoPisada}
              alt=""
              className="w-14 drop-shadow-2xl object-cover"
            /> */}
            <img
              src={canchaTermica}
              alt=""
              className="w-/12 drop-shadow-2xl object-cover"
            />
          </div>

        </div>
        <div>
          <section>
            <span className="text-[0.7em] font-semibold">SELECCIÓN NACIONAL </span>{" "}
            <span className="text-[0.7em] text-red-500 font-semibold">2023</span>
            <div className="flex items-center gap-2"> 
              <img src={cafs} alt="cafs" className="w-6 h-6" />
              <span className="text-[0.6em]">SELECCIÓN ARGENTINA C.A.F.S</span>
              
              
              </div>
          </section>
          <section>
            <span className="text-[0.7em] font-semibold">SELECCIÓN PROVINCIAL </span>{" "}
            <span className="text-[0.7em] text-red-500 font-semibold">2023</span>
            <div className="flex items-center gap-2"> 
            <img src={cfsp} alt="cafs" className="w-6 h-6" />
              <span className="text-[0.6em]">COMODORO RIVADAVIA</span></div>
          </section>
        </div>
      </div>
    </div>
  );
}
