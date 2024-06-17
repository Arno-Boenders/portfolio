import React from "react";
import Card from "../components/Card";
import Skills from "../components/Skills";
import "../css/styles.css"; // Make sure to import your CSS file
import EmailForm from "../components/EmailForm";
import projectsData from "../data/projects.json"; // Adjust the path as necessary
import { Helmet } from "react-helmet";

export default function Home() {
  const projects = Object.keys(projectsData.projects).map((key) => {
    const project = projectsData.projects[key];
    return {
      image: project.image_url,
      title: key
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase()),
      link: `/projects/${key}`,
    };
  });

  return (
    <div className="flex flex-col">
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Arno Boenders</title>
        </Helmet>
      </div>
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
              Hallo, ik ben Arno Boenders, 22 jaar oud en ik studeer
              programmeren aan de Arteveldehogeschool. Mijn doel is om een
              fullstack developer te worden. Ik heb al kennis van verschillende
              nuttige programmeertalen zoals HTML, CSS, React, JavaScript en
              PHP. Naast mijn passie voor programmeren, ben ik ook sportief en
              houd ik van een actieve levensstijl. Ik kijk ernaar uit om mijn
              vaardigheden verder te ontwikkelen en mijn dromen in de IT-wereld
              waar te maken.
            </p>
          </div>
        </div>
        <div className="my-40">
          <h2 className="text-2xl sm:text-6xl my-10 font-bold">Skills</h2>
          <Skills />
        </div>
        <div id="work" className="my-40">
          <h2 className="text-2xl sm:text-6xl mb-5 font-bold">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 xl:gap-20 justify-items-center">
            {projects.map((project, index) => (
              <div key={index} className="flex justify-center w-full">
                <Card
                  image={project.image}
                  title={project.title}
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="my-40">
          <h2 className="text-2xl sm:text-6xl my-10 font-bold">Contact</h2>
          <EmailForm />
        </div>
      </div>
    </div>
  );
}
