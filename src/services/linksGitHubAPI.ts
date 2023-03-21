import { ILinkInfo } from "./../models/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const linksGitHubAPI = createApi({
  reducerPath: "linksGitHubAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getLinksGitHub: build.query<ILinkInfo[], void>({
      query: () => ({
        url: "/linksGitHub",
      }),
    }),
  }),
});

export const { useGetLinksGitHubQuery } = linksGitHubAPI;
//  регистрируем в store/store.ts
