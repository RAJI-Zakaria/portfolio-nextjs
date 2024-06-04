import { QuoteType } from "@/types/quote";
import { readLikedQuotes } from "../_utils/fileQuotes";
import { fetchQuoteById } from "../_hooks/quoteFetcher";
export const dynamic = "force-dynamic";

const QuotesLikesPage = async () => {
  const quotesIds = readLikedQuotes();
  console.log(quotesIds);
  //fetch quotes using fetchQuoteById
  let quotes = [];
  for (const quoteId of quotesIds) {
    const quote = await fetchQuoteById(quoteId);
    quotes.push(quote);
  }

  return (
    <div className="flex flex-wrap justify-center mt-10  ">
      {quotes.map((quote, index) => (
        <div
          key={index}
          className="p-4 m-3 max-w-sm w-full bg-gradient-to-tr from-[#FFB457] to-[#FF705B] justify-center items-center border border-default-200 dark:border-default-100 rounded-lg "
        >
          <div className="text-center text-lg font-bold">{quote.content}</div>
          <div className="text-center text-sm mt-2">- {quote.author}</div>
        </div>
      ))}
    </div>
  );
};

export default QuotesLikesPage;
