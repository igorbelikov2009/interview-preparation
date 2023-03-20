import { ILinkInfo } from "../models/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cssFishkiAPI = createApi({
  reducerPath: "cssFishkiAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getCssFishki: build.query<ILinkInfo[], void>({
      query: () => ({
        url: "/linksCSSFishki",
      }),
    }),
  }),
});

export const { useGetCssFishkiQuery } = cssFishkiAPI;
//  регистрируем в store/store.ts
