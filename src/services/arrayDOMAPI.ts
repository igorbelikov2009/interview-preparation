import { IObjectHeadingAnswers } from "../models/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const arrayDOMAPI = createApi({
  reducerPath: "arrayDOMAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getArrayDOM: build.query<IObjectHeadingAnswers[], void>({
      query: () => ({
        url: "/arrayDOM",
      }),
    }),
  }),
});

export const { useGetArrayDOMQuery } = arrayDOMAPI;
//  регистрируем в store/store.ts
