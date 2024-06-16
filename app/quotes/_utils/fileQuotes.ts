const fs = require("fs");
import path from "path";

const filePath = path.resolve("app/quotes/_utils/liked.quotes.json");
// Check if the file exists
if (!fs.existsSync(filePath)) {
  // Create the file with an empty array inside
  fs.writeFileSync(filePath, JSON.stringify([], null, 2));
  console.log("File created with empty array inside.");
} else {
  console.log("File already exists.");
}
export const readLikedQuotes = (): string[] => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading liked quotes:", err);
    return [];
  }
};

export const writeLikedQuotes = (quotes: string[]) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(quotes, null, 2), "utf-8");
  } catch (err) {
    console.error("Error writing liked quotes:", err);
  }
};

export const toggleQuoteLike = (quoteId: string): string[] => {
  let likedQuotes = readLikedQuotes();

  if (likedQuotes.includes(quoteId)) {
    likedQuotes = likedQuotes.filter((id) => id !== quoteId);
  } else {
    likedQuotes.push(quoteId);
  }

  writeLikedQuotes(likedQuotes);

  return likedQuotes;
};
