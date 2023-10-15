import React from "react";
import canchaTermica from "../../assets/images/canchaTermica.png";
import diegoPisada from "../../assets/player/diegoPisada.png";
export default function Bio() {
  return (
    <div>
      <div className="p-2">
        <span className="font-bold">BIOGRAFÍA</span>
      </div>
      <div className="bg-white text-black rounded-lg p-2">
        <span className="text-xl">DIEGO VARGAS</span>
        <div className="flex gap-2">
          <div>
            <section>
              <span className="text-sm font-semibold">NACIMIENTO </span>{" "}
              <span className="text-sm text-red-500 font-semibold">
                {" "}
                14/10/1996
              </span>
            </section>
            <section>
              <span className="text-sm font-semibold">PAIS </span>{" "}
              <span className="text-sm text-red-500 font-semibold">
                ARGENTINA
              </span>
            </section>
            <section>
              <span className="text-sm font-semibold">DEBUT </span>{" "}
              <span className="text-sm text-red-500 font-semibold"> 2014</span>
            </section>
            <section>
              <span className="text-sm font-semibold">POSICIÓN </span>{" "}
              <span className="text-sm text-red-500 font-semibold">
                PIVOTE/ALA
              </span>
            </section>
          </div>

          <div className="flex justify-start">
            <img
              src={diegoPisada}
              alt=""
              className="w-14 drop-shadow-2xl object-cover"
            />
            <img
              src={canchaTermica}
              alt=""
              className="w-36 drop-shadow-2xl object-cover"
            />
          </div>
        </div>
        <div>
          <section>
            <span className="text-sm font-semibold">SELECCIÓN NACIONAL </span>{" "}
            <span className="text-sm text-red-500 font-semibold">2023</span>
            <div><span>SELECCIÓN ARGENTINA C.A.F.S</span></div>
          </section>
          <section>
            <span className="text-sm font-semibold">SELECCIÓN PROVINCIAL </span>{" "}
            <span className="text-sm text-red-500 font-semibold">2023</span>
            <div><span>COMODORO RIVADAVIA</span></div>
          </section>
        </div>
      </div>
    </div>
  );
}
