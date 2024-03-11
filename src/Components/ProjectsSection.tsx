import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
// import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

import ReactQuiz from "../assets/images/projects/the-react-quiz.png";
import Paralax from "../assets/images/projects/paralax.png";
import MovieMate from "../assets/images/projects/movie-mate.png";
import KryptImg from "../assets/images/projects/krypt.png";
import WorldWise from "../assets/images/projects/worldwise.png";

const projectsData = [
  {
    id: 1,
    title: "Krypt",
    description:
      "My first web 3.0 dApp for blockchain   transactions, I used React, Tailwind CSS, and Solidity for smart contracts.",
    image: KryptImg,
    tag: ["All", "Web 3.0"],
    liveDemo: "https://krypt-puce.vercel.app/",
    sourceCode: "https://github.com/Denis-Dinkov/Krypt",
  },
  {
    id: 1,
    title: "WorldWise",
    description:
      "The project was developed to practice advanced React skills, such as React Router, Context API, and advanced patterns.",
    image: WorldWise,
    tag: ["All", "Web 2.0"],
    liveDemo: "https://krypt-puce.vercel.app/",
    sourceCode: "https://github.com/Denis-Dinkov/WorldWise",
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
    id: 2,
    title: "The React Quiz",
    description:
      "Small react project where you can test your react knowledge. I made this project to learn more about react and useReducer hook.",
    image: ReactQuiz,
    tag: ["All", "Web 2.0"],
    liveDemo: "https://the-react-quiz.vercel.app/",
    sourceCode: "",
  },

  {
    id: 3,
    title: "MovieMate",
    description:
      "I worked on the MovieMate project to practice my React skills. It's about selecting your favorite movies and adding them to a watchlist using an API.",
    image: MovieMate,
    tag: ["All", "Web 2.0"],
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
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={() => handleTagChange("All")}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Web 2.0")}
          name="Web 2"
          isSelected={tag === "Web 2"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Web 3.0")}
          name="Web 3"
          isSelected={tag === "Web 3"}
        />
      </div> */}
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
