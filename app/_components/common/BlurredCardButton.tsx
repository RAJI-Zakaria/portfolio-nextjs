"use client";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Link,
} from "@nextui-org/react";
import React from "react";
import Icons from "./Icons";
import { useRouter } from "next/navigation";

const BlurredCardButton = ({
  title,
  description,
  githubLink,
  link,
  isPopover,
  isLinkBlank,
}: {
  title: string;
  description: string;
  githubLink: string;
  link: string;
  isPopover?: boolean;
  isLinkBlank?: boolean;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { GithubIcon } = Icons;
  const router = useRouter();
  const linkClicked = () => {
    if (isLinkBlank) {
      window.open(link, "_blank");
    } else {
      router.push(link);
    }
  };
  return (
    <>
      <Button
        className="text-tiny text-white bg-black/20 px-8"
        variant="flat"
        color="default"
        radius="lg"
        size="sm"
        onClick={(isPopover && onOpen) || linkClicked}
      >
        More Details
      </Button>

      <Modal
        size="3xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="outside"
      >
        <ModalContent>
          {(onClose: any) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white">
                {title}
              </ModalHeader>
              <ModalBody>
                <p
                  className=" text-white"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
                {githubLink && (
                  <Link href={githubLink} aria-label="Github">
                    <GithubIcon className="text-default-500" />
                  </Link>
                )}
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
    </>
  );
};

export default BlurredCardButton;
