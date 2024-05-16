//create a hook to fetch quotes here is the base url https://api.quotable.io/ using axios
// great method like fetchRandomQuote, fetchQuoteById

import axios from "axios";
import { QuoteType } from "@/types/quote";

const baseURL = "https://api.quotable.io";

const fetchRandomQuote = async (): Promise<QuoteType> => {
  const { data } = await axios.get(`${baseURL}/random`);
  return data;
};

const fetchQuoteById = async (id: string): Promise<QuoteType> => {
  const { data } = await axios.get(`${baseURL}/quotes/${id}`);
  return data;
};

export { fetchRandomQuote, fetchQuoteById };
