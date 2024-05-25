import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import BlurredCardButton from "./BlurredCardButton";

export default function BlurredCard({
  title,
  description,
  imagePath,
  link,
  isLinkBlank,
  githubLink,
  isPopover,
}: {
  title: string;
  description?: string;
  imagePath: string;
  link: string;
  isLinkBlank?: boolean;
  githubLink: string;
  isPopover?: boolean;
}) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="flex-shrink-0 border-none h-[300px] w-[300px] md:h-60 md:w-60 mx-auto my-3  md:m-3 hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover border-1 border-neutral-800  hover:border-neutral-600 "
        // height={200}
        src={imagePath}
        // width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80 w-full text-start">{title}</p>
        <BlurredCardButton
          title={title}
          description={description || " No description"}
          githubLink={githubLink}
          isPopover={isPopover}
          link={link}
          isLinkBlank={isLinkBlank}
        />
      </CardFooter>
    </Card>
  );
}
