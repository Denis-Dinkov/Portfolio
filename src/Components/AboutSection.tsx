import { useState, useTransition } from "react";
import TabButton from "./TabButton";

export default function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const tabContent = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2 grid grid-cols-2">
          <li>React</li>
          <li>Node.js</li>
          <li>Redux</li>
          <li>Sass</li>
          <li>Bootsrap & Tailwind</li>
          <li>MySQL</li>
          <li>JavaScript</li>
          <li>Express.js</li>
          <li>Vue</li>
          <li>MongoDB</li>
          <li>TypeScript</li>
          <li>Git & GitHub</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Js Web Development - SoftUni Academy</li>
          <li>The Ultimate React Course 2024: React, Redux & More - Udemy</li>
          <li>
            Build Responsive Real-World Websites with HTML and CSS - Udemy
          </li>
          <li>
            Advanced CSS and Sass: Flexbox, Grid, Animations and More! -Udemy
          </li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>The Ultimate React Course 2024: React, Redux- Udemy</li>
          <li>Advanced CSS and Sass: Flexbox, Grid, Animations -Udemy</li>
          <li>
            Build Responsive Real-World Websites with HTML and CSS - Udemy
          </li>
          <li>Understanting TypeScript - Udemy</li>
          <li>Js Web Development - SoftUni Academy</li>
          <li>JS Web - SoftUni</li>
          <li>JS Applications - SoftUni</li>
          <li>JS Advanced - SoftUni</li>
          <li>Programming Fundamentals with JavaScript- SoftUni</li>
          <li>Programming Basics - SoftUni</li>
        </ul>
      ),
    },
  ];

  const handleTablChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img
          src="https://cdn.dribbble.com/users/1708816/screenshots/15637256/media/f9826f0af8a49462f048262a8502035b.gif"
          alt="about"
          className="rounded-lg"
          width={530}
          height={500}
          loading="lazy"
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base lg:text-lg">
            I am a web developer with a passion for creating beautiful and
            functional user experiences. I have a strong foundation in web
            development and have experience working with both front-end and
            back-end technologies. I am a quick learner and a team player who is
            always looking to improve my skills and learn new technologies.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTablChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTablChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTablChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {tabContent.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
}
