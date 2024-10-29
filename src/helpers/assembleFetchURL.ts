import { assembleFetchURLType } from "@/types";

const BASE_URL = "https://api.rawg.io/api/games";

const assembleFetchURL: assembleFetchURLType = ({ type, id, options = {} }) => {
  const apiKeyPart = `?key=${import.meta.env.VITE_API_KEY}`;
  let url = BASE_URL;

  if (type === "game") {
    return `${url}/${id}${apiKeyPart}`;
  }

  if (type === "screenshots") {
    return `${url}/${id}/screenshots${apiKeyPart}`;
  }

  url += apiKeyPart;

  if (options.search) url += `&search=${options.search}`;

  if (options.dates) {
    url += `&dates=${options.dates.startDate}`;
    if (options.dates.endDate) url += `,${options.dates.endDate}`;
  }

  if (options.ordering) {
    const order = options.ordering.reversed
      ? `-${options.ordering.type}`
      : options.ordering.type;
    url += `&ordering=${order}`;
  }

  if (options.page) {
    if (options.page.number) url += `&page=${options.page.number}`;
    if (options.page.size) url += `&page_size=${options.page.size}`;
  }

  return url;
};

export default assembleFetchURL;
