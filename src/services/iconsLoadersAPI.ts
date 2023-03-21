import { ILinkInfo } from "./../models/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const iconsLoadersAPI = createApi({
  reducerPath: "iconsLoadersAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getIconsLoaders: build.query<ILinkInfo[], void>({
      query: () => ({
        url: "/linksIconsLoaders",
      }),
    }),
  }),
});

export const { useGetIconsLoadersQuery } = iconsLoadersAPI;
//  регистрируем в store/store.ts
