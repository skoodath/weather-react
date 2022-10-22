export const capitalize = (string) => {
  if (string)
    return string[0].toUpperCase() + string.split("").slice(1).join("");
};
