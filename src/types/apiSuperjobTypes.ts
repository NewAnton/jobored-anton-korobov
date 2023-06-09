export interface ISignInResponse {
  access_token: string;
  refresh_token: string;
  ttl: number;
  expires_in: number;
  token_type: string;
}

export interface ISignInData {
  access_token: string;
  refresh_token: string;
  client_id: string;
  client_secret: string;
  token: string;
}

enum EnumTypeOfWork {
  "полный день" = 6,
  "неполный день" = 10,
  "сменный график" = 12,
  "частичная занятость" = 13,
  "временная работа" = 7,
  "вахтовым методом" = 9,
}

export interface IGetVacanciesRequest {
  published?: number;
  keyword?: string;
  payment_from?: number;
  payment_to?: number;
  catalogues?: number;
  page?: number;
  count?: number;
  ids?: number[];
}

export interface IGetVacancyResponse {
  id: number;
  payment_from: number | null;
  payment_to: number | null;
  profession: string;
  currency: string;
  type_of_work: {
    id: number;
    title: EnumTypeOfWork;
  };
  town: {
    id: number;
    title: string;
    declension: string;
    genitive: string;
  };
  firm_name: string;
  vacancyRichText: string;
}

export interface IGetVacanciesResponse {
  objects: IGetVacancyResponse[];
  total: number;
  corrected_keyword: string | null;
  more: boolean;
}

export interface IGetVacancyRequest {
  id: number;
}

export interface IGetCataloguesResponse {
  title_rus: string;
  url_rus: string;
  title: string;
  id_parent: number;
  key: number;
}

export interface IError {
  code: number;
  message: string;
  error: string;
}
