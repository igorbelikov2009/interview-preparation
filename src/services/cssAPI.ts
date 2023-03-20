import { ILinkInfo } from "./../models/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cssAPI = createApi({
  reducerPath: "cssAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getLinksCSS: build.query<ILinkInfo[], void>({
      query: () => ({
        url: "/linksCSS",
      }),
    }),
  }),
});

export const { useGetLinksCSSQuery } = cssAPI;
//  регистрируем в store/store.ts
