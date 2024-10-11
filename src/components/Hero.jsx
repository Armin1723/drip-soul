import React from "react";
import { images } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";


const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    document.querySelectorAll(".elem").forEach((elem, index) => {
      let tl = gsap.timeline();
      let image = elem.querySelector("img");

      const xTransform = gsap.utils.random(-100, 100);

      tl.set(
        image,
        {
          transformOrigin: `${xTransform < 0 ? "-100%" : "100%"}`,
        },
        "start"
      ).to(
        image,
        {
          scale: 0,
          ease: "none",
          scrollTrigger: {
            trigger: elem,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        },
        "start"
      );
    });
  });
  return (
    <>
      <div className="grid grid-rows-16 grid-cols-8 overflow-hidden gap-2 w-full bg-[#9ea2e3] relative min-h-fit">
        {images.map((image) => {
          return (
            <div
              key={image.id}
              className="elem col-span-1 row-span-1 "
              style={{
                "--r": Math.floor(Math.random() * 15 + 1),
                "--c": Math.floor(Math.random() * 7 + 1),
              }}
            >
              <img
                src={`images/${image.src}`}
                alt={image.src}
                className="shadow-[0_0_50px_#c1c11c88]"
              />
            </div>
          );
        })}
        <div className="heading font-['Helvetica_Now_Display'] fixed top-[40vh] w-full">
          <h1 className="text-8xl tracking-wider text-center font-bold uppercase">
            Drip Soul
          </h1>
          <p className="text-center text-gray-300 text-2xl tracking-widest mb-4">
            One Step Ahead of the Rest.
          </p>
          <Link className="fancy my-4 -left-1/2 absolute translate-x-1/2" href="/">
            <span className="top-key"></span>
            <span className="text">Join Now</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
