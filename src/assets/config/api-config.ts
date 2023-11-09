import { HttpHeaders } from "@angular/common/http";

export enum APIMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE"
}
export interface BackendConfig {
  api: ApiConfig[];
}
export interface ApiConfig {
  name: string;
  method: APIMethod;
  url: string;
  headers?: HttpHeaders;
  timeout?: number;
}

export const backendApi: ApiConfig[] = [
  {
    name: 'getCatFacts',
    method: APIMethod.GET,
    url: 'https://meowfacts.herokuapp.com/',
  },
  {
    name: 'searchBooks',
    method: APIMethod.GET,
    url: 'https://www.googleapis.com/books/v1/volumes'
  },
];
