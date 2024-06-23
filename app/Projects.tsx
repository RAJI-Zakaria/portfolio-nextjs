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
      title: "Walmart Clone",
      description: `<h3>Introduction</h3>
        <p>What a great technology Next.js is! It introduces numerous methods to code in a clean and structured manner.</p>
        <p>🎉 Just wrapped up developing a mini Walmart clone 💪 using Next.js & DummyJSON API.</p>
        <p>I delved into Intercepting & Parallel routes 😮 as well as making use of tools, like Shadcn and Zustand to improve efficiency.</p>
        <p>Indeed it was mind blowing 🤯.</p>
        <br />
        <h2>Core :</h2>
        <ul className="list-disc bg-red-800">
            <li> - Fetching API</li>
            <li> - Listing Product - Respecting Types (typescript)</li>
            <li> - Implementing Parallel Routes & Interceptors</li>
        </ul><br />
        <p>Special Thanks to Sonny Sangha (PapaReact) for the beautiful tutorial & tips.</p>
        <p>It's a pity Oxylabs web scraper doesn't provide free trial for more than 1 week as a result I used DummyJSON to fetch fake products instead! </p>
        <br />
        <h2>Deployment</h2>
        <p><a href="https://walmart-clone-airakaz.vercel.app/">https://walmart-clone-airakaz.vercel.app/</a></p>
        <iframe  style="width:100%; min-height:350px; border-radius:24px"  src="https://www.youtube.com/embed/7OvM_VE36GA" title="WALMART   AIRAKAZ FR   Zakaria RAJI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    `,
      githubLink: "",
      imagePath: "/thumbnails/thumbnail-walmart.png",
      link: "/project1",
      isPopover: true,
    },
    {
      title: "Spotify Clone",
      description: `<h3>Introduction</h3>
        <p>React JS: Simplicity is the key to its popularity.</p>
         <br />
         <a href="https://github.com/RAJI-Zakaria/spotify-clone-react-js" >https://github.com/RAJI-Zakaria/spotify-clone-react-js</a>
        <br />
         <br />
        <p>🎉 Here is the first version of my Spotify clone 💪 using React.js & Spotify API.</p>
        <p>The app is still under construction, but here are the technologies that i used : </p>
        <ul>
       <li> - React JS 18</li>
<li> - Spotify API</li>
<li> - React Context (reducer, dispatcher) VS Prop Drilling</li>
<li> - Custom CSS</li>
<li> - TailwindCSS</li>
        </ul>
        <br />
        <img  style="width:100%; border-radius:24px"  src="/spotify/spotify-dev.png" />
        <br />
        <p>All playlist items are fetched dynamically from the connected user's Spotify account.</p>

        <br />
        <h2>Prop Drilling --> Coupled Code</h2>

        <p>Avoiding passing data between components using props is mandatory. Using the Context API, Redux, or any state management library will save us a lot of trouble dealing with data flow throughout the entire app.</p>

        <br />
         <a href="https://github.com/RAJI-Zakaria/spotify-clone-react-js" >https://github.com/RAJI-Zakaria/spotify-clone-react-js</a>
    `,
      githubLink: "",
      imagePath: "/thumbnails/thumbnail-spotify.png",
      link: "/project1",
      isPopover: true,
    },
    {
      title: "GuitART - Customize your Guitar",
      description: `<h3>Introduction :</h3>

      <ul style="list-style-type: circle; margin-left:20px;text-align:justify;">
        <li>First of all, I would like to express my heartfelt gratitude to my professor, Mr. J. Vinola, who is not only a skilled system embedded engineer but also a talented guitarist.</li>
        <li>He presented a comprehensive full-stack project for the class, utilizing robust technologies such as .NET C#, MySQL, PHP, and DHTML.</li>
        <li>Here is a video showcasing what we have accomplished.</li>
      </ul>
      <br />
      <h2>The video is in Spanish: (It brings a unique flavor to speak Spanish even as a beginner).</h2>
      <br />
      <iframe style="width:100%; min-height:350px; border-radius:24px"  src="https://www.youtube.com/embed/VV1uIWdDaDA" title="Guitart - School Project desktop app Team Work - Voice Off - i don&#39;t speak Spanish - But i love it." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      githubLink: "",
      imagePath: "/thumbnails/thumbnail-guitart.png",
      link: "/project1",
      isPopover: true,
    },
    {
      title: "Calculator",
      link: "/calculator",
      imagePath: "/thumbnails/thumbnail-calculator.png",
      githubLink: "",
      isPopover: false,
    },
    {
      title: "Quotes",
      link: "/quotes",
      imagePath: "/thumbnails/thumbnail-quotes.png",
      githubLink: "",
      isPopover: false,
    },
    {
      title: "Logo",
      link: "/logo",
      imagePath: "/thumbnails/thumbnail-logo.png",
      githubLink: "",
      isPopover: false,
    },
    {
      title: "Counter",
      link: "/counter",
      imagePath: "/thumbnails/thumbnail-counter.png",
      githubLink: "",
      isPopover: false,
    },
    {
      title: "Color Guesser",
      link: "/color-guesser",
      imagePath: "/thumbnails/thumbnail-color-guesser.png",
      githubLink: "",
      isPopover: false,
    },
    {
      title: "More Projects",
      link: "https://github.com/RAJI-Zakaria",
      isLinkBlank: true,
      imagePath: "/thumbnails/thumbnail-more.png",
      isPopover: false,
      githubLink: "",
    },
  ];

  //
  return (
    <section id="projects" className="flex flex-col etext-center gap-4 my-40">
      <div className="space-y-3 flex flex-col justify-center text-justify md:text-center">
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
