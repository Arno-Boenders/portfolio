import React from "react";
import { useParams, NavLink } from "react-router-dom";
import projectsData from "../data/projects.json";

export default function DetailProject() {
  const { slug } = useParams();
  const project = projectsData.projects[slug];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="px-4 sm:mx-10 md:px-20 xl:mx-60">
      <NavLink to="/#work" className="hover:text-orange-300 mb-4 inline-block">
        &larr; Back to Home
      </NavLink>
      <h1 className="text-4xl uppercase font-bold mt-5 mb-14 text-center">
        {slug.replace(/-/g, " ")}
      </h1>
      <div className="gap-10 md:flex">
        <div className="flex flex-col">
          <img src={project.image_url} alt={slug.replace(/-/g, " ")} />
          <div className="my-5">
            <h2 className="text-2xl uppercase font-medium mb-2">
              Technologies:
            </h2>
            {project.technologies && <p>{project.technologies.join(", ")}</p>}
          </div>
          {project.github && (
            <div className="my-5">
              <h2 className="text-2xl uppercase font-medium mb-2">Github:</h2>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500"
              >
                {project.github}
              </a>
            </div>
          )}
          {project.link && (
            <div className="my-5">
              <h2 className="text-2xl uppercase font-medium mb-2">Link:</h2>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500"
              >
                {project.link}
              </a>
            </div>
          )}
        </div>

        <div>
          <h2 className="text-2xl uppercase font-medium mb-4">
            Over het project:
          </h2>
          <p>{project.details}</p>
          {slug === "kamperen-in-vr" && (
            <div className="my-10">
              <h2 className="text-2xl uppercase font-medium mb-2">Demo:</h2>
              <div className="flex justify-center md:justify-start">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/d4P7aXXNqW0?si=FKWgsiBbuxbPMsio"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
