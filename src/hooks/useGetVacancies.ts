import { useEffect } from "react";
import useSWR from "swr";

import {
  IError,
  IGetVacanciesRequest,
  IGetVacanciesResponse,
} from "@/types/apiSuperjobTypes";

const getVacancies = (apiURL: string) =>
  fetch(apiURL, {
    method: "GET",
  }).then((res) => res.json());

export function useGetVacancies({
  published,
  keyword,
  payment_from,
  payment_to,
  catalogues,
  page,
  count,
  ids,
}: IGetVacanciesRequest) {
  const url = `/api/vacancies/?published=${
    published || ""
  }${keyword ? "&keyword=" + keyword : ""}${
    payment_from ? "&payment_from=" + payment_from : ""
  }${payment_to ? "&payment_to=" + payment_to : ""}${
    catalogues ? "&catalogues=" + catalogues : ""
  }&page=${page || 0}${count ? "&count=" + count : ""}${
    ids ? "&ids[]=" + ids.join("&ids[]=") : ""
  }`;

  const { data, error, isLoading } = useSWR<IGetVacanciesResponse, IError>(
    url, (url) => getVacancies(url)
  );

  useEffect(() => {
    if (data) {
      console.log('responce', data);
    }
  }, [data]);

  return [data, error, isLoading] as const;
}
