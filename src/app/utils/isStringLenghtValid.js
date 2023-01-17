const isStringLengthValid = (string, maxLength) => {
  const letters = string.split("");
  if (letters.length > 0 && letters.length < maxLength) return true;
  if (letters.length > 0 && !(letters.length < maxLength)) {
    console.log(`Error: Length should not exceed ${maxLength} characters`);
  }
};
export default isStringLengthValid;
