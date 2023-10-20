import React from "react";
import cafs from "../../assets/logos/logo-CAFS.png";
import cfsp from "../../assets/logos/logo-CFSP.png";

import "./honorsStyles.css";

export default function Honors() {
  return (
    <div>
      <div className="p-2">
        <span className="font-bold ">PALMARÉS</span>
      </div>
      <div className="text-black  bg-white/50   rounded-lg p-2 md:p-4">
        <div className="flex flex-col gap-2 rounded-lg">
          {/* Selecciones */}
          <div className="honor-card flex  flex-col items-center rounded-lg py-2 ">
            <span className="text-[0.7em] md:text-xl  font-semibold">
              Convocatorias Nacionales
            </span>{" "}
            <div className="flex gap-2 justify-center  w-full p-2">
              <section className=" flex flex-col items-start ">
                <span className="text-[0.7em] md:text-xl  font-semibold">
                  SELECCIÓN NACIONAL{" "}
                </span>{" "}
                <span className="text-[0.7em] md:text-xl  text-red-500 font-semibold">
                  2023
                </span>
                <div className="flex items-center gap-2">
                  <img src={cafs} alt="cafs" className="w-6 h-6" />
                  <span className="text-[0.6em] md:text-lg ">
                    SELECCIÓN ARGENTINA C.A.F.S
                  </span>
                </div>
              </section>
              <div></div>
              <section className=" flex flex-col ">
                <span className="text-[0.7em] md:text-xl  font-semibold">
                  SELECCIÓN PROVINCIAL{" "}
                </span>{" "}
                <span className="text-[0.7em] md:text-xl  text-red-500 font-semibold">
                  2023
                </span>
                <div className="flex items-center gap-2">
                  <img src={cfsp} alt="cafs" className="w-6 h-6" />
                  <span className="text-[0.6em] md:text-lg ">
                    COMODORO RIVADAVIA
                  </span>
                </div>
              </section>
            </div>
          </div>
          {/* Con flamengo */}
          <div className="honor-card flex flex-col items-center rounded-lg py-2 ">
            <span className="text-[0.7em] md:text-xl  font-semibold">
              Flamengo
            </span>{" "}
            <div className="flex">
              <section className="w-1/2">
                <span className="text-[0.6em] md:text-lg  font-semibold">
                  Torneos Nacionales{" "}
                </span>{" "}
                <div>
                  🏆
                  <span className="text-[0.6em] md:text-lg ">
                    División de Honor 2019
                  </span>
                </div>
                <div>
                  🥉
                  <span className="text-[0.6em] md:text-lg ">
                    3° puesto Formosa 2022
                  </span>
                </div>
                <div>
                  🥈
                  <span className="text-[0.6em] md:text-lg ">
                    Subcampeonato 2023
                  </span>
                </div>
                <div>
                  🏆
                  <span className="text-[0.6em] md:text-lg ">
                    Copa Nacional P Madryn 2022
                  </span>
                </div>
              </section>
              <section className="w-1/2">
                <span className="text-[0.6em] md:text-lg  font-semibold">
                  Torneos Locales
                </span>{" "}
                <div>
                  🏆
                  <span className="text-[0.6em] md:text-lg ">Clausura 16</span>
                </div>
                <div>
                  🏆
                  <span className="text-[0.6em] md:text-lg ">
                    Apertura y Clausura 17'
                  </span>
                </div>
                <div>
                  🏆
                  <span className="text-[0.6em] md:text-lg ">
                    Apertura y Clausura 18'
                  </span>
                </div>
                <div>
                  🏆
                  <span className="text-[0.6em] md:text-lg ">
                    Apertura y Clausura 21'
                  </span>
                </div>
                <div>
                  🏆
                  <span className="text-[0.6em] md:text-lg ">
                    Apertura y Clausura 22'
                  </span>
                </div>
                <div>
                  🏆
                  <span className="text-[0.6em] md:text-lg ">Apertura 23'</span>
                </div>
              </section>
            </div>
          </div>
          {/* Con JOCKEY */}
          <div className="honor-card flex flex-col items-center rounded-lg py-2 ">
            <span className="text-[0.7em] md:text-xl  font-semibold">
              Jockey Club (Mendoza){" "}
            </span>{" "}
            <section>
              <div>
                🏆
                <span className="text-[0.6em] md:text-lg ">
                  Campeón Mundial 'Contintental Cup FiFuSa 2023'
                </span>
              </div>
            </section>
          </div>
          {/* Con San Martin */}
          <div className="honor-card flex flex-col items-center rounded-lg py-2 ">
            <span className="text-[0.7em] md:text-xl  font-semibold">
              Club San Martín de San Juan Bautista (Paraguay)
            </span>{" "}
            <section>
              <div>
                🏆
                <span className="text-[0.6em] md:text-lg ">
                  Campeón Copa 2022
                </span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
