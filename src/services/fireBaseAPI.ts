import { ILinkInfo } from "./../models/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fireBaseAPI = createApi({
  reducerPath: "fireBaseAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getFireBase: build.query<ILinkInfo[], void>({
      query: () => ({
        url: "/linksFireBase",
      }),
    }),
  }),
});

export const { useGetFireBaseQuery } = fireBaseAPI;
//  регистрируем в store/store.ts
