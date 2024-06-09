import React from "react";
import { Tilt } from "react-tilt";
const skills = [
  {
    name: "HTML",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    name: "CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    name: "JavaScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Node.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "Express",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
  {
    name: "SQL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
  },
  {
    name: "Figma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    name: "Git",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
  },
];
export default function Skills() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {skills.map((skill) => (
        <Tilt
          key={skill.name}
          className="Tilt"
          options={{ max: 25, scale: 1.05 }}
        >
          <div className="Tilt-inner flex flex-col items-center transition duration-300 ease-in-out transform rounded-xl hover:shadow-2xl">
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-auto h-16 mb-2 p-2"
            />
            <span className="text-lg font-medium">{skill.name}</span>
          </div>
        </Tilt>
      ))}
    </div>
  );
}
