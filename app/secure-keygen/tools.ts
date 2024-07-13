const generateSecureKey = (length: number, options: string[]): string => {
  let pattern = "";
  if (options.includes("uppercase")) {
    pattern += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (options.includes("lowercase")) {
    pattern += "abcdefghijklmnopqrstuvwxyz";
  }
  if (options.includes("numbers")) {
    pattern += "0123456789";
  }
  if (options.includes("special-chars")) {
    pattern += "!@#$%^&*()_+";
  }

  if (pattern.length === 0) {
    pattern =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  }

  console.log({
    length,
    options,
    pattern,
  });

  let result = "";
  for (let i = 0; i < length; i++) {
    result += pattern.charAt(Math.floor(Math.random() * pattern.length));
  }

  console.log({ options: result });
  return result;
};

export { generateSecureKey };
