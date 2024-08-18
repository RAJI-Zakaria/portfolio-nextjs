import React from "react";
import BlurredCard from "./_components/common/BlurredCard";
import Link from "next/link";
import { projects } from "@/data/projects";
const Projects = () => {
  //
  return (
    <section id="projects" className="flex flex-col gap-4 my-40">
      <div className="space-y-3 flex flex-col text-center">
        <h2 className="font-bold text-4xl md:text-4xl leading-normal">
          Why Collaborate with Me
        </h2>
        <p>Explore a selection of projects I&apos;ve worked on. </p>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row justify-center ">
        {projects.map((project, index) => (
          <BlurredCard
            key={index}
            title={project.title}
            description={project.description}
            imagePath={project.imagePath}
            link={project.link}
            githubLink={project.githubLink}
            isPopover={project?.isPopover || false}
            isLinkBlank={project?.isLinkBlank || false}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
