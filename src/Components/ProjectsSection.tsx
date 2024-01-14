import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

import Project1 from "../assets/images/projects/1.png";
import Project2 from "../assets/images/projects/2.png";
import Project3 from "../assets/images/projects/3.png";

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laborum.",
    image: Project1,
    tag: ["All", "React"],
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laborum.",
    image: Project2,
    tag: ["All", "React"],
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laborum.",
    image: Project3,
    tag: ["All", "React", "Web"],
  },
];

export default function ProjectSection() {
  const [tag, setTag] = useState("All");

  const handleTagChange = (tag: string) => {
    setTag(tag);
  };

  const filteredProject = projectsData.filter((project) => {
    return project.tag.includes(tag);
  });

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProject.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            img={project.image}
            tags={project.tag}
          />
        ))}
      </div>
    </>
  );
}