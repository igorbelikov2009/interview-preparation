import { IObjectHeadingAnswers } from "../models/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const destructuringObjectsAPI = createApi({
  reducerPath: "destructuringObjectsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getDestructuringObjects: build.query<IObjectHeadingAnswers[], void>({
      query: () => ({
        url: "/arrayDestructuringObjects",
      }),
    }),
  }),
});

export const { useGetDestructuringObjectsQuery } = destructuringObjectsAPI;
//  регистрируем в store/store.ts
