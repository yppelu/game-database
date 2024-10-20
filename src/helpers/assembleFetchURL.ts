import { assembleFetchURLType } from "@/types";

const BASE_URL = "https://api.rawg.io/api/games";

const assembleFetchURL: assembleFetchURLType = (param) => {
  const apiKeyPart = `?key=${import.meta.env.API_KEY}`;
  let url = BASE_URL;

  if (typeof param === "number") {
    return `${url}/${param}${apiKeyPart}`;
  }

  url += apiKeyPart;

  if (param.search) url += `&search=${param.search}`;

  if (param.dates) {
    url += `&dates=${param.dates.startDate}`;
    if (param.dates.endDate) url += `,${param.dates.endDate}`;
  }

  if (param.ordering) {
    const order = param.ordering.reversed
      ? `-${param.ordering.type}`
      : param.ordering.type;
    url += `&ordering=${order}`;
  }

  if (param.page) {
    if (param.page.number) url += `&page=${param.page.number}`;
    if (param.page.size) url += `&page_size=${param.page.size}`;
  }

  return url;
};

export default assembleFetchURL;
