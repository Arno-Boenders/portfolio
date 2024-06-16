import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../data/projects.json";

export default function DetailProject() {
  const { slug } = useParams();
  const project = projectsData.projects[slug];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="mx-10">
      <h1 className="text-4xl uppercase font-bold">
        {slug.replace(/-/g, " ")}
      </h1>
      <div className="gap-10 md:flex">
        <div className="flex flex-col">
          <img src={project.image_url} alt={slug.replace(/-/g, " ")} />
          <div>
            <h2 className="text-2xl uppercase font-medium mb-2">
              Technologies:
            </h2>
            {project.technologies && <p>{project.technologies.join(", ")}</p>}
          </div>
        </div>

        <div>
          <h2 className="text-2xl uppercase font-medium mb-2">
            Over het project:
          </h2>
          <p>{project.details}</p>
          {slug === "kamperen-in-vr" && (
            <div>
              <h2 className="text-2xl uppercase font-medium mb-2">Demo:</h2>
              <iframe
                width="560"
                height="315"
                src="https://youtu.be/d4P7aXXNqW0?si=FKWgsiBbuxbPMsio"
                title="YouTube video player"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
