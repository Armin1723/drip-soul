import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Testimonials = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const page = document.querySelector(".page");
    gsap.to(".feature", {
      transform: "translateX(-150%)",
      scrollTrigger: {
        trigger: page,
        start: "top 0",
        end: "top -150%",
        scrub: 2,
        pin: true,
      },
    });
  });
  return (
      <div className="page w-full h-screen z-[2] bg-blue-300 flex items-center ">
        <div className="container my-[25vh] border-t border-b shadow-[0_0_25px_#c1c1c1] flex">
          <h2 className="feature text-[25vw] font-bold uppercase px-4">
            Testimonials
          </h2>
        </div>
      </div>
  );
};

export default Testimonials;
