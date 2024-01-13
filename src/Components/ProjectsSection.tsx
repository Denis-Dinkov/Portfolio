import ProjectCard from "./ProjectCard";

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
    tag: ["All", "React"],
  },
];

export default function ProjectSection() {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <button className="rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer">
          All
        </button>
        <button className="rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer">
          Web
        </button>
        <button>Web</button>
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
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
