import { IObjectHeadingAnswers } from "../models/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const arrayErrorAPI = createApi({
  reducerPath: "arrayErrorAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getArrayError: build.query<IObjectHeadingAnswers[], void>({
      query: () => ({
        url: "/arrayErrorProcessing",
      }),
    }),
  }),
});

export const { useGetArrayErrorQuery } = arrayErrorAPI;
//  регистрируем в store/store.ts
