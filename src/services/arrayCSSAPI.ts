import { IObjectHeadingAnswers } from "../models/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const arrayCSSAPI = createApi({
  reducerPath: "arrayCSSAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getArrayCSS: build.query<IObjectHeadingAnswers[], void>({
      query: () => ({
        url: "/arrayCSS",
      }),
    }),
  }),
});

export const { useGetArrayCSSQuery } = arrayCSSAPI;
//  регистрируем в store/store.ts
