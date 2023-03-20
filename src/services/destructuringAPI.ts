import { ILinkInfo } from "./../models/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const linksDestructuringAPI = createApi({
  reducerPath: "linksDestructuringAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getLinksDestructuring: build.query<ILinkInfo[], void>({
      query: () => ({
        url: "/linksDestructuring",
      }),
    }),
  }),
});

export const { useGetLinksDestructuringQuery } = linksDestructuringAPI;
//  регистрируем в store/store.ts
