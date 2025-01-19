"use server";
import { readLikedQuotes, toggleQuoteLike } from "../_utils/fileQuotes";
import { revalidatePath } from "next/cache";

let likedQuotes = readLikedQuotes();

const toggleLike = async (quoteId: string) => {
  console.log("server action is called");
  console.log({ likedQuotes });
  const updatedLikedQuotes = toggleQuoteLike(quoteId);

  // Update likedQuotes (simulate persistence if required)
  likedQuotes = updatedLikedQuotes;
  revalidatePath("/quotes");
  return updatedLikedQuotes.includes(quoteId);
};

const isLiked = async (quoteId: string) => {
  return likedQuotes.includes(quoteId);
};

export { toggleLike, isLiked };
