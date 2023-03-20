import { ILinkInfo } from "./../models/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const linksDOMAPI = createApi({
  reducerPath: "linksDOMAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getLinksDOM: build.query<ILinkInfo[], void>({
      query: () => ({
        url: "/linksDOM",
      }),
    }),
  }),
});

export const { useGetLinksDOMQuery } = linksDOMAPI;
//  регистрируем в store/store.ts
