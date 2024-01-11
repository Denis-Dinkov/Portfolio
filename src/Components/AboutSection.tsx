import { useState, useTransition } from "react";
import aboutImg from "../assets/images/about-image.png";
import TabButton from "./TabButton";

export default function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const tabContent = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>Node.js</li>
          <li>Node.js</li>
        </ul>
      )
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>SoftUni</li>
          <li>Udemy</li>
        </ul>
      )
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>SoftUni</li>
          <li>Udemy</li>
        </ul>
      )
    }
  ]

  const handleTablChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img
          src={aboutImg}
          alt="about"
          className="rounded-lg"
          width={500}
          height={500}
          loading="lazy"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            voluptates, voluptatem, repellat, quas voluptatibus quibusdam
            voluptatum dolorum voluptate quod doloremque. Quisquam, voluptatem
            voluptas. Quisquam, voluptatem voluptas.
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
          <div className="mt-8">{tabContent.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  );
}
