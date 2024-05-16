import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import { Icons } from "@/app/_components/";
import Link from "next/link";
import { fetchRandomQuote } from "./_hooks/quoteFetcher";
import LikeQuote from "./LikeQuote";
import { isLiked } from "./_hooks/quoteServerActions";

const QuotesPage = async () => {
  const { QuoteIcon } = Icons;

  const quote = await fetchRandomQuote();
  // const liked = await isLiked(quote._id);
  // console.log({
  //   quote,
  //   liked,
  // });
  const liked = false;
  //wait 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log(quote);
  return (
    <div className="w-full min-h-unit-9xl h-auto bg-gradient-to-tr from-[#FFB457] to-[#FF705B] justify-center relative flex flex-col items-center border border-default-200 dark:border-default-100 px-2 py-4 rounded-lg overflow-hidden  space-y-3">
      <div className="w-[610px] flex justify-between items-center">
        <h1 className="text-2xl text-left font-semibold text-neutral-100  ">
          Daily Quotes
        </h1>

        <Link
          href="/quotes/likes"
          className="border-none rounded-large bg-background/60 dark:bg-default-100/50 px-5 py-2  self-stretch flex items-center justify-center text-sm text-neutral-100 "
        >
          Liked History
        </Link>
      </div>
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 w-[610px] p-10"
        shadow="sm"
      >
        <CardBody>
          <div className="grid gap-6 md:gap-4 items-center justify-center">
            <div className="relative">
              <figure className="max-w-screen-md mx-auto text-center">
                <QuoteIcon />
                <blockquote>
                  <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
                    &quot;{quote.content}&quot;
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                  <div className="flex items-center justify-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                    <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                      {quote.author}
                    </cite>
                    {quote && <LikeQuote quote={quote} isLiked={liked} />}
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default QuotesPage;
