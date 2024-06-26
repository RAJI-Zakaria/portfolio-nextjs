import React from "react";

const OldContact = () => {
  return (
    <div className=" grid place-items-left place-content-center xs:mx-2 xs:px-3 mx-auto relative xl:border bg-neutral-900 xl:border-neutral-700 grid-cols-1 lg:grid-cols-2 gap-10 p-10 lg:p-[60px] rounded-2xl">
      <div>
        <h2 className="text-white text-4xl font-semibold">Get in touch</h2>
        <p className="text-sm text-white mt-4">
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9046da] to-[#ff0080] mb-5">
            Dont be shy
          </span>
          , if you have some great idea or project you wish to get done feel
          free to contact me
        </p>
        <a
          className="transform hover:scale-[1.02] transition-all ml-0 xs:ml-0 p-2 w-2/4 my-3 md:w-1/4 md:py-3 rounded-md shadow-sm shadow-neutral-700 flex flex-row m-2 hover:cursor-pointer text-center text-white border border-[#7928ca] hover:text-[#ff0080] hover:shadow-neutral-500"
          href="mailto:jagetic.bojan@gmail.com"
        >
          <span className="basis-3/4 md:text-sm ">Say hello</span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="text-xl mx-1 px-0 basis-1/4 text-amber-400"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M23 17c0 3.31-2.69 6-6 6v-1.5c2.48 0 4.5-2.02 4.5-4.5H23zM1 7c0-3.31 2.69-6 6-6v1.5C4.52 2.5 2.5 4.52 2.5 7H1zm7.01-2.68l-4.6 4.6c-3.22 3.22-3.22 8.45 0 11.67s8.45 3.22 11.67 0l7.07-7.07c.49-.49.49-1.28 0-1.77a1.25 1.25 0 00-1.77 0l-4.42 4.42-.71-.71 6.54-6.54c.49-.49.49-1.28 0-1.77s-1.28-.49-1.77 0l-5.83 5.83-.71-.71 6.89-6.89c.49-.49.49-1.28 0-1.77s-1.28-.49-1.77 0l-6.89 6.89-.69-.7 5.48-5.48c.49-.49.49-1.28 0-1.77s-1.28-.49-1.77 0l-7.62 7.62a4.003 4.003 0 01-.33 5.28l-.71-.71a3 3 0 000-4.24l-.35-.35 4.07-4.07c.49-.49.49-1.28 0-1.77a1.27 1.27 0 00-1.78.01z"></path>
          </svg>
        </a>
      </div>
      <div>
        <h2 className="text-white text-4xl font-semibold">Blogging</h2>
        <p className="text-sm text-white mt-4">
          I have been writing blogs as well on{" "}
          <span className="font-bold text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#9046da] to-[#ff0080] mb-5">
            Dev.to, Medium
          </span>{" "}
          and{" "}
          <span className="font-bold text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#9046da] to-[#ff0080] mb-5">
            Hashnode
          </span>
          , I try to keep content up to date with my personal blog
        </p>
        <div className="flex flex-col xl:flex-row">
          <a
            className="transform hover:scale-[1.02] transition-all ml-0 xs:ml-0 p-2 w-2/4 my-3 md:w-1/4 md:py-3 rounded-md shadow-sm shadow-neutral-700 flex flex-row m-2 hover:cursor-pointer text-center text-white border border-[#7928ca] hover:text-[#ff0080] hover:shadow-neutral-500"
            href="https://dev.to/basskibo"
            target="_blank"
            rel="noreferrer"
          >
            <span className="basis-3/4 md:text-sm ">Dev.to</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              role="img"
              viewBox="0 0 24 24"
              className="text-xl mx-1 px-0 basis-1/4 text-[#fff]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"></path>
            </svg>
          </a>
          <a
            className="transform hover:scale-[1.02] transition-all ml-0 xs:ml-0 p-2 w-2/4 my-3 md:w-1/4 md:py-3 rounded-md shadow-sm shadow-neutral-700 flex flex-row m-2 hover:cursor-pointer text-center text-white border border-[#7928ca] hover:text-[#ff0080] hover:shadow-neutral-500"
            href="https://hashnode.bojanjagetic.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="basis-3/4 md:text-sm ">Hashnode</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              role="img"
              viewBox="0 0 24 24"
              className="text-xl mx-1 px-0 basis-1/4 text-[#2962FF]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z"></path>
            </svg>
          </a>
          <a
            className="transform hover:scale-[1.02] transition-all ml-0 xs:ml-0 p-2 w-2/4 my-3 md:w-1/4 md:py-3 rounded-md shadow-sm shadow-neutral-700 flex flex-row m-2 hover:cursor-pointer text-center text-white border border-[#7928ca] hover:text-[#ff0080] hover:shadow-neutral-500"
            href="https://medium.com/@jagetic.bojan"
            target="_blank"
            rel="noreferrer"
          >
            <span className="basis-3/4 md:text-sm ">Medium</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              role="img"
              viewBox="0 0 24 24"
              className="text-xl mx-1 px-0 basis-1/4 text-[#cecece]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-white text-4xl font-semibold">
          Sign up for{" "}
          <span className="text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#9046da] to-[#ff0080] mb-5">
            {" "}
            newsletter
          </span>
        </h2>
        <p className="text-sm text-white mt-4">
          if you liked what you read and want to read a lot of similar content,
          subscribe to the mailing list and receive an email on a weekly/monthly
          basis.
        </p>
      </div>
      <div>
        <div className=" items-stretch grid">
          <input
            className="w-4/4 lg:w-3/4 my-3 bg-neutral-900 text-white px-3 py-2 rounded-md border border-slate-600 focus:border-[#7928ca] flex-grow focus:outline-none cursor-text"
            placeholder="Enter your email"
            type="email"
            defaultValue=""
          />
          <button
            type="button"
            data-splitbee-event="Subscribe Newsletter"
            disabled
            className="transform hover:scale-[1.02] transition-all md:w-1/4 ml-0 xs:ml-0 p-2 w-4/4 my-3 lg:w-1/4 rounded-md shadow-sm shadow-neutral-700 hover:cursor-pointer text-center text-white border border-[#7928ca] hover:text-[#ff0080] hover:shadow-neutral-500"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default OldContact;
