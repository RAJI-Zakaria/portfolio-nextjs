"use client";
import { Button } from "@nextui-org/button";
import { LinkIcon } from "@nextui-org/link";
import Image from "next/image";
import Link from "next/link";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";

const Certification = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState(0);

  const certifications = [
    {
      title: "The Ultimate Docker Course",
      logo: "/docker.svg",
      url: "/certificate-of-completion-for-the-ultimate-docker-course.pdf",
      description:
        "Learn Docker from scratch and build a secure, scalable, and efficient containerized web application.",
    },
    {
      title: "Mastering Next.js 13 with TypeScript",
      logo: "/next.svg",
      url: "/certificate-of-completion-for-mastering-next-js-13-with-typescript.pdf",
      description:
        "Master Next.js 13 with TypeScript and build a full-stack application with the latest features.",
    },
  ];
  return (
    <section className="flex flex-col text-center gap-4 my-40 px-5 pb-10 pt-20  xl:border bg-neutral-900 xl:border-neutral-700 rounded-2xl">
      <div className="space-y-3 flex flex-col justify-center">
        <h2 className="font-bold text-4xl md:text-4xl leading-normal">
          Certified &nbsp;
          <span className="bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent">
            Proficiency
          </span>
        </h2>
        <p>
          Demonstrating my commitment to professional development,
          <br />
          here are some of the certifications I&apos;ve achieved to showcase my
          expertise in full-stack
          <br />
          JavaScript development and related technologies.
        </p>
      </div>
      <div className="flex space-x-10 justify-center py-10">
        {certifications.map((certification, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 gap-2"
          >
            <Image
              src={certification.logo}
              alt={`${certification.title} Logo`}
              width={100}
              height={100}
              className="dark:invert h-7"
              priority
            />
            <p className="text-neutral-200">{certification.title}</p>
            <Button
              onPress={onOpen}
              onClick={() => setSelectedItem(index)}
              className="flex justify-center items-center group rounded-lg border border-transparent border-gray-900 bg-white text-neutral-900 dark:text-neutral-100 dark:bg-neutral-500/30 dark:border-neutral-900 px-5 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <LinkIcon />
              <p className="text-sm">Visit Website</p>
            </Button>
          </div>
        ))}
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {certifications[selectedItem].title}
              </ModalHeader>
              <ModalBody>
                <p>{certifications[selectedItem].description}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                  ok
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default Certification;

//-------------------------------------------------- OLD
{
  /* <section className="flex flex-col text-center gap-4 my-40 px-5 pb-10 pt-20  xl:border bg-neutral-900 xl:border-neutral-700 rounded-2xl">
<div className="space-y-3 flex flex-col justify-center">
  <h2 className="font-bold text-4xl md:text-4xl leading-normal">
    Key Tools for&nbsp;
    <span className="bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent">
      Success
    </span>
  </h2>
  <p>
    Discover the essential tools and technologies that empower my
    <br />
    success in delivering impactful solutions globally.
  </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-10">
  <div className="flex flex-col items-center space-y-2 gap-2">
    <Image
      src="/vercel.svg"
      alt="Vercel Logo"
      width={100}
      height={100}
      className="dark:invert"
      priority
    />
    <p className="text-neutral-200">Vercel</p>
    <a
      href="#outside"
      className="flex justify-center items-center group rounded-lg border border-transparent border-gray-900 bg-white text-neutral-900 dark:text-neutral-100 dark:bg-neutral-500/30 dark:border-neutral-900 px-5 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <LinkIcon />
      <p className="text-sm">Visit Website</p>
    </a>
  </div>
  <div className="flex flex-col items-center space-y-2 gap-2">
    <Image
      src="/vercel.svg"
      alt="Vercel Logo"
      width={100}
      height={100}
      className="dark:invert"
      priority
    />
    <p className="text-neutral-200">Vercel</p>
    <a
      href="#outside"
      className="flex justify-center items-center group rounded-lg border border-transparent border-gray-900 bg-white text-neutral-900 dark:text-neutral-100 dark:bg-neutral-500/30 dark:border-neutral-900 px-5 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <LinkIcon />
      <p className="text-sm">Visit Website</p>
    </a>
  </div>
  <div className="flex flex-col items-center space-y-2 gap-2">
    <Image
      src="/vercel.svg"
      alt="Vercel Logo"
      width={100}
      height={100}
      className="dark:invert"
      priority
    />
    <p className="text-neutral-200">Vercel</p>
    <a
      href="#outside"
      className="flex justify-center items-center group rounded-lg border border-transparent border-gray-900 bg-white text-neutral-900 dark:text-neutral-100 dark:bg-neutral-500/30 dark:border-neutral-900 px-5 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <LinkIcon />
      <p className="text-sm">Visit Website</p>
    </a>
  </div>
  <div className="flex flex-col items-center space-y-2 gap-2">
    <Image
      src="/vercel.svg"
      alt="Vercel Logo"
      width={100}
      height={100}
      className="dark:invert"
      priority
    />
    <p className="text-neutral-200">Vercel</p>
    <a
      href="#outside"
      className="flex justify-center items-center group rounded-lg border border-transparent border-gray-900 bg-white text-neutral-900 dark:text-neutral-100 dark:bg-neutral-500/30 dark:border-neutral-900 px-5 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <LinkIcon />
      <p className="text-sm">Visit Website</p>
    </a>
  </div>
</div>
</section> */
}
