import { ILinkInfo } from "./../models/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const frameworksCSSAPI = createApi({
  reducerPath: "frameworksCSSAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getFrameworksCSS: build.query<ILinkInfo[], void>({
      query: () => ({
        url: "/linksFrameworksCSS",
      }),
    }),
  }),
});

export const { useGetFrameworksCSSQuery } = frameworksCSSAPI;
//  регистрируем в store/store.ts
