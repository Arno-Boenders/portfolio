import React from "react";
import Card from "../components/Card";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div
        className="relative mb-10 h-96 min-h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/img/hero-image.jpg')" }}
      >
        <div className="absolute inset-0 flex flex-col pl-4 md:pl-40 justify-center">
          <h1 className="text-4xl uppercase text-white">Arno Boenders</h1>
          <strong className="text-2xl uppercase text-white">
            Full-Stack developer
          </strong>
        </div>
      </div>
      <div className="container mx-auto mb:px-20">
        <div className="flex flex-col md:flex-row gap-5 md:gap-32 mb-10 items-center">
          <p>
            Ik ben een enthousiaste programmeringsstudent aan de Artevelde
            Hogeschool, verrijkt met een solide basis in webontwikkeling van
            Odisee, gedreven om digitale innovaties te creëren.
          </p>
          <button className="bg-orange-200 rounded-md min-h-12 min-w-32 transition ease-in-out hover:scale-110 duration-300 hover:shadow-xl">
            Meer over mij
          </button>
        </div>
        <div>
          <h2 className="text-3xl mb-5 font-bold">Skills</h2>
          <Skills />
        </div>
        <div id="projects">
          <h2 className="text-3xl mb-5 font-bold">Projects</h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-20 justify-center items-center">
            <Card
              image="/assets/img/kamperen-in-vr.jpg"
              title="Kamperen in VR"
              link="https://example.com"
            />
            <Card
              image="https://via.placeholder.com/400"
              title="Sample Card Title"
              link="https://example.com"
            />
            <Card
              image="https://via.placeholder.com/400"
              title="Sample Card Title"
              link="https://example.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
