import { ILinkInfo } from "./../models/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const arrayMethodsAPI = createApi({
  reducerPath: "arrayMethodsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getLinksArrayMethods: build.query<ILinkInfo[], void>({
      query: () => ({
        url: "/linksArrayMethods",
      }),
    }),
  }),
});

export const { useGetLinksArrayMethodsQuery } = arrayMethodsAPI;
//  регистрируем в store/store.ts
