const generateDate = (date) => {
  const option = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Date(date).toLocaleDateString("id-ID", option);
  return formattedDate;
};

export default generateDate;
