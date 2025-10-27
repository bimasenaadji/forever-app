export const formatDate = (isoString) => {
  if (!isoString) return "";

  const data = new Date(isoString);

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return data.toLocaleDateString("id-ID", options);
};
