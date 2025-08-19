export const dateFormat = (createdAt) => {
  const date = new Date(createdAt);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const formatted = date.toLocaleString("en-US", options);
  return formatted;
};
