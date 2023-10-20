import React from "react";
import canchaTermica from "../../assets/images/canchaTermica.png";
import arg from "../../assets/logos/banderaArgentina.png";

export default function Bio() {
  return (
    <scroll-page id="bio">
      <div className="p-2">
        <span className="font-bold">BIOGRAFÍA</span>
      </div>
      <div className="flex md:items-start bg-white/80 text-black rounded-lg p-2 md:p-6">
        <div className="flex flex-col">
          <span className="title font-semibold text-xl md:mb-4 md:text-4xl">
            DIEGO VARGAS
          </span>
          <div className="flex flex-col items-start justifty-center">
            <section>
              <span className="text-[0.7em] md:text-lg font-semibold">
                NACIMIENTO
              </span>
              <span className="text-[0.7em] md:text-lg text-red-500 font-semibold">
                14/10/1996
              </span>
            </section>
            <section className="flex gap-2 items-center">
              <span className="text-[0.7em] md:text-lg font-semibold">
                PAIS
              </span>
              <span className="text-[0.7em] md:text-lg text-red-500 font-semibold">
                ARGENTINA
              </span>
              <img src={arg} alt="" className="h-3" />
            </section>
            <section>
              <span className="text-[0.7em] md:text-lg font-semibold">
                DEBUT
              </span>
              <span className="text-[0.7em] md:text-lg text-red-500 font-semibold">
                2014
              </span>
            </section>
            <section>
              <span className="text-[0.7em] md:text-lg font-semibold">
                POSICIÓN
              </span>
              <span className="text-[0.7em] md:text-lg text-red-500 font-semibold">
                PIVOTE/ALA
              </span>
            </section>
          </div>
        </div>
        <div className="flex w-1/2 drop-shadow-2xl justify-end items-center">
          <img
            src={canchaTermica}
            alt=""
            className="drop-shadow-2xl object-cover"
          />
        </div>
      </div>
    </scroll-page>
  );
}
