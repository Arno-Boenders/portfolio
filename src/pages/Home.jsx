import React from "react";
import Card from "../components/Card";
import Skills from "../components/Skills";
import "../css/styles.css"; // Make sure to import your CSS file

export default function Home() {
  return (
    <div className="flex flex-col">
      <div
        className="relative mb-10 min-h-screen w-full bg-cover md:bg-right xl:bg-center bg-custom-position"
        style={{ backgroundImage: "url('/assets/img/hero-image.jpg')" }}
      >
        <div className="absolute inset-0 flex flex-col pl-4 md:pl-20 lg:pl-40 justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl uppercase text-white">
            Arno Boenders
          </h1>
          <strong className="text-lg sm:text-xl md:text-3xl uppercase text-white">
            Full-Stack Developer
          </strong>
        </div>
      </div>
      <div id="about" className="px-4 sm:mx-10 md:px-20 xl:mx-60">
        <div className="my-40">
          <h2 className="text-2xl sm:text-6xl my-10 font-bold">About me</h2>
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 xl:gap-20 mb-10 items-center md:items-start justify-between">
            <p className="text-base sm:text-lg md:text-xl">
              Ik ben een enthousiaste programmeringsstudent aan de Artevelde
              Hogeschool, verrijkt met een solide basis in webontwikkeling van
              Odisee, gedreven om digitale innovaties te creëren.
            </p>
          </div>
        </div>
        <div className="my-40">
          <h2 className="text-2xl sm:text-6xl my-10 font-bold">Skills</h2>
          <Skills />
        </div>
        <div id="work" className="my-40">
          <h2 className="text-2xl sm:text-6xl mb-5 font-bold">Projects</h2>
          <div className="flex flex-col lg:flex-row gap-8 md:gap-10 xl:gap-20 xl:w-full justify-between items-center">
            <Card
              image="/assets/img/kamperen-in-vr.jpg"
              title="Kamperen in VR"
              link="/projects/kamperen-in-vr"
            />
            <Card
              image="/assets/img/wings-of-belgium.svg"
              title="Wings of Belgium"
              link="/projects/wings-of-belgium"
            />
            <Card
              image="/assets/img/flappy-teachers.gif"
              title="Flappy Teachers"
              link="/projects/flappy-teachers"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
