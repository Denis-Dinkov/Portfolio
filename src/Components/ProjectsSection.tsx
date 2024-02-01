import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

import Project2 from "../assets/images/projects/2.png";
import Project3 from "../assets/images/projects/3.png";
import ReactQuiz from "../assets/images/projects/the-react-quiz.png";

const projectsData = [
  {
    id: 1,
    title: "The React Quiz",
    description:
      "Small react project where you can test your react knowledge. I made this project to learn more about react and useReducer hook.",
    image: ReactQuiz,
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (tag: string) => {
    setTag(tag);
  };

  const filteredProject = projectsData.filter((project) => {
    return project.tag.includes(tag);
  });

  const cardVariants = {
    inital: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:md-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={() => handleTagChange("All")}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Web")}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={() => handleTagChange("React")}
          name="React"
          isSelected={tag === "React"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProject.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="inital"
            animate={isInView ? "animate" : "inital"}
            transition={{ doration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              img={project.image}
              tags={project.tag}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
