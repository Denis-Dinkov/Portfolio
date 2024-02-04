import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

import ReactQuiz from "../assets/images/projects/the-react-quiz.png";
import Paralax from "../assets/images/projects/paralax.png";
import MovieMate from "../assets/images/projects/movie-mate.png";

const projectsData = [
  {
    id: 1,
    title: "The React Quiz",
    description:
      "Small react project where you can test your react knowledge. I made this project to learn more about react and useReducer hook.",
    image: ReactQuiz,
    tag: ["All", "React"],
    liveDemo: "https://the-react-quiz.vercel.app/",
    sourceCode: "",
  },
  {
    id: 2,
    title: "Travelo-Paralax",
    description:
      "Parallax project, aiming to create an engaging scrolling experience with a cool parallax effect using stunning images from Zhangjiajie, China.",
    image: Paralax,
    tag: ["All", "Web"],
    liveDemo: "https://travelo-parallax.vercel.app/",
    sourceCode:
      "https://github.com/Denis-Dinkov/Travelo-Parallax?tab=readme-ov-file",
  },
  {
    id: 3,
    title: "MovieMate",
    description:
      "I worked on the MovieMate project to practice my React skills. It's about selecting your favorite movies and adding them to a watchlist using an API.",
    image: MovieMate,
    tag: ["All", "React"],
    liveDemo: "https://www.google.com",
    sourceCode: "https://www.google.com",
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
              liveDemo={project.liveDemo}
              sourceCode={project.sourceCode}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
