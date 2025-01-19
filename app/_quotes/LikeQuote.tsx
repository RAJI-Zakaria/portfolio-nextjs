"use client";
import { Icons } from "@/app/_components/";
import { Button, Spinner } from "@nextui-org/react";
import { toggleLike } from "./_hooks/quoteServerActions";
import { QuoteType } from "@/types/quote";
import { useState, useEffect } from "react";
import classNames from "classnames";

const LikeQuote = ({
  quote,
  isLiked,
}: {
  quote: QuoteType;
  isLiked: boolean;
}) => {
  const { HeartIcon } = Icons;

  const [liked, setLiked] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleToggleLike = async () => {
    setIsPending(true);
    const updatedLikedStatus = await toggleLike(quote._id);
    setLiked(updatedLikedStatus);
    setIsPending(false);
  };

  useEffect(() => {
    setLiked(!liked);
  }, [quote]);

  useEffect(() => {
    setLiked(isLiked);
  }, []);

  return (
    <Button
      isIconOnly
      className={classNames(
        "text-default-900/60 data-[hover]:bg-foreground/10 border-none",
        liked ? "text-red-500" : "text-gray-500"
      )}
      radius="full"
      variant="flat"
      type="submit"
      onClick={handleToggleLike}
      disabled={isPending}
    >
      {isPending ? (
        <Spinner />
      ) : (
        <HeartIcon
          className={liked ? "[&>path]:stroke-transparent" : ""}
          fill={liked ? "currentColor" : "none"}
        />
      )}
    </Button>
  );
};

export default LikeQuote;
