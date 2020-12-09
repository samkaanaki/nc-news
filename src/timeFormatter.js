export const timeFormatter = (string) => {
  let newStr = string;
  newStr = newStr.split(/[-T.]/);
  newStr[3] = newStr[3].slice(0, 5);
  return `${newStr[2]}/${newStr[1]}/${newStr[0]} at ${newStr[3]}`;
};
