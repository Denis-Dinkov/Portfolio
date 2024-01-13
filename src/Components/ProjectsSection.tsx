import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laborum.",
    image: "../assets/images/projects/1.png",
    tag: ["All", "React"],
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laborum.",
    image: "../assets/images/projects/2.png",
    tag: ["All", "React"],
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laborum.",
    image: "../assets/images/projects/3.png",
    tag: ["All", "React"],
  },
];

export default function ProjectSection() {
  return (
    <>
      <h2>My Projects</h2>
      <div>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project.tag}

          />
        ))}
      </div>
    </>
  );
}
