import { ILinkInfo } from "../models/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const linksError = createApi({
  reducerPath: "linksError",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getLinksError: build.query<ILinkInfo[], void>({
      query: () => ({
        url: "/linksErrorProcessing",
      }),
    }),
  }),
});

export const { useGetLinksErrorQuery } = linksError;
//  регистрируем в store/store.ts
