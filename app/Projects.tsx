import React from "react";
import BlurredCard from "./_components/common/BlurredCard";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "Issue Tracker",
      description: `<h3>Introduction</h3>
        <p>Embarking on a new journey with Next.js to create an issue tracker. Here is a list of the features that I will develop:</p>
        <br />
        <h2>Core :</h2>
        <ul className="list-disc bg-red-800">
            <li> - Creating issues</li>
            <li> - Viewing issues</li>
            <li> - Updating issues</li>
            <li> - Deleting issues</li>
        </ul><br />
        <h2>Advanced :</h2>
        <ul className="list-disc">
            <li> - User authentication</li>
            <li> - Assigning issues</li>
            <li> - Sorting issues</li>
            <li> - Filtering issues</li>
            <li> - Pagination</li>
            <li> - Dashboard</li>
        </ul><br />
        <h2>Deployment</h2>
        <p><a href="https://issue-tracker-next-js-six.vercel.app/">https://issue-tracker-next-js-six.vercel.app/</a></p>
    `,
      githubLink: "",
      imagePath: "/thumbnails/thumbnail-issue-tracker-2.jpg",
      link: "/project1",
      isPopover: true,
    },
    {
      title: "More Projects",
      link: "https://github.com/RAJI-Zakaria",
      isLinkBlank: true,
      imagePath: "/thumbnails/thumbnail-more.png",
      isPopover: false,
      githubLink: "",
    },
    {
      title: "Calculator",
      link: "/calculator",
      imagePath: "/thumbnails/thumbnail-calculator.png",
      githubLink: "",
      isPopover: false,
    },
  ];
  return (
    <section className="flex flex-col text-center gap-4 my-40 px-5 pb-10 pt-20">
      <div className="space-y-3 flex flex-col justify-center">
        <h2 className="font-bold text-4xl md:text-4xl leading-normal">
          Why work with me
        </h2>
        <p>
          Explore a selection of projects I&apos;ve worked on. <br />
          Each project showcases my skills and expertise in delivering impactful
          solutions.
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-fit m-auto ">
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
