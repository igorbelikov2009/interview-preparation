import { ILinkInfo } from "./../models/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const linksHTTPAPI = createApi({
  reducerPath: "linksHTTPAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getLinksHTTP: build.query<ILinkInfo[], void>({
      query: () => ({
        url: "/linksHTTP",
      }),
    }),
  }),
});

export const { useGetLinksHTTPQuery } = linksHTTPAPI;
//  регистрируем в store/store.ts
