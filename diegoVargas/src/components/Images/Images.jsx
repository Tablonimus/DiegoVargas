import { Carousel } from "flowbite-react";
import React from "react";
import dv1 from "../../assets/carousel/dv1.jpg";
import dv2 from "../../assets/carousel/dv2.jpg";
import dv3 from "../../assets/carousel/dv3.jpg";
import dv4 from "../../assets/carousel/dv4.jpg";
import dv5 from "../../assets/carousel/dv5.jpg";

export default function Images() {
  return (
    <div className="">
      <div className="p-2">
        <span className="font-bold">FOTOGRAFÍAS</span>
      </div>
      <div className="h-96 bg-white p-2 rounded-lg">
        <Carousel indicators={false}>
          <img
            src={dv1}
            alt=""
            className=" object-cover w-96 h-96 rounded-2xl"
          />
          <img
            src={dv2}
            alt=""
            className=" object-cover w-96 h-96 rounded-2xl"
          />
          <img
            src={dv3}
            alt=""
            className=" object-cover w-96 h-96 rounded-2xl"
          />
          <img
            src={dv4}
            alt=""
            className=" object-cover w-96 h-96 rounded-2xl"
          />
          <img
            src={dv5}
            alt=""
            className=" object-cover w-96 h-96 rounded-2xl"
          />
        </Carousel>
      </div>
    </div>
  );
}
