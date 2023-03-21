import { IObjectHeadingAnswers } from "../models/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const arrayHTTPAPI = createApi({
  reducerPath: "arrayHTTPAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getArrayHTTP: build.query<IObjectHeadingAnswers[], void>({
      query: () => ({
        url: "/arrayHTTP",
      }),
    }),
  }),
});

export const { useGetArrayHTTPQuery } = arrayHTTPAPI;
//  регистрируем в store/store.ts
