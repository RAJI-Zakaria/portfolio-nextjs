import React from "react";

const About = () => {
  return (
    <section id="about" className="grid lg:grid-cols-2 gap-4 my-24">
      <div className="space-y-3 flex flex-col justify-center">
        <h2 className="font-bold text-4xl md:text-4xl leading-normal text-center md:text-left">
          Together Towards
          <br />
          <span className="bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent">
            Lasting Success
          </span>
        </h2>
        <p className="text-justify">
          An upcoming graduate from ENSSAT Engineering School, specializing in
          Cybersecurity and Web Development, I am passionate about delivering
          cutting-edge IT services and software solutions to organizations.{" "}
          <br />
          With a keen interest in web/mobile design, multimedia, and digital
          marketing strategies such as SEO, I am eager to apply my skills and
          knowledge to drive innovation and growth. <br />
          <br />
          Currently seeking new opportunities in a Junior Development Lead
          position.
        </p>
      </div>
      <div className="">
        <iframe
          className="w-full h-unit-6xl rounded-2xl"
          src="https://www.youtube.com/embed/t_5GQyVWB1E?si=-5I6MC7T2EPIV9jV"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default About;
