import React from "react";
import canchaTermica from "../../assets/images/canchaTermica.svg";
export default function Bio() {
  return (
    <div>
      <div className="p-2">
        <span className="font-bold">BIOGRAFÍA</span>
      </div>
      <div className="bg-white text-black rounded-lg p-2">
        <span className="text-xl">DIEGO VARGAS</span>
        <div className="flex">
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
                {" "}
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
                {" "}
                PIVOTE/ALA
              </span>
            </section>
          </div>

          <div className="">
            <img src={canchaTermica} alt="" className="w-32" />
          </div>
        </div>
      </div>
    </div>
  );
}
