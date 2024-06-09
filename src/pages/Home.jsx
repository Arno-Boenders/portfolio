import React from "react";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <div
        className="relative mb-10 h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/img/hero-image.jpg')" }}
      >
        <div className="absolute inset-0 flex flex-col pl-40 justify-center">
          <h1 className="text-4xl uppercase text-white">Arno Boenders</h1>
          <strong className="text-2xl uppercase text-white">
            Full-Stack developer
          </strong>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex gap-32 mb-10 items-center">
          <p>
            Ik ben een enthousiaste programmeringsstudent aan de Artevelde
            Hogeschool, verrijkt met een solide basis in webontwikkeling van
            Odisee, gedreven om digitale innovaties te creëren.
          </p>
          <button className="bg-orange-200 rounded-md min-h-12 min-w-32 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            Meer over mij
          </button>
        </div>
        <div id="projects">
          <h2 className="text-3xl mb-5">Projects</h2>
          <div className="flex gap-2 justify-center items-center">
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
