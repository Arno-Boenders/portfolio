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
            <h2 className="text-2xl uppercase font-medium mb-2">Technologies:</h2>
            {project.technologies && <p>{project.technologies.join(", ")}</p>}
          </div>
        </div>

        <div>
          <h2 className="text-2xl uppercase font-medium mb-2">Over het project:</h2>
          <p>{project.details}</p>
        </div>
      </div>
    </div>
  );
}
