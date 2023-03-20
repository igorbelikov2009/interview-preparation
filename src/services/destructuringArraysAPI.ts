import { IObjectHeadingAnswers } from "../models/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const destructuringArraysAPI = createApi({
  reducerPath: "destructuringArraysAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getDestructuringArray: build.query<IObjectHeadingAnswers[], void>({
      query: () => ({
        url: "/arrayDestructuringArrays",
      }),
    }),
  }),
});

export const { useGetDestructuringArrayQuery } = destructuringArraysAPI;
//  регистрируем в store/store.ts
