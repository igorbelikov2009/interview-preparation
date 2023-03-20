"use strict";
exports.__esModule = true;
exports.useGetDestructuringArrayQuery = exports.destructuringArraysAPI = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.destructuringArraysAPI = react_1.createApi({
    reducerPath: "destructuringArraysAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (build) { return ({
        getDestructuringArray: build.query({
            query: function () { return ({
                url: "/arrayDestructuringArrays"
            }); }
        })
    }); }
});
exports.useGetDestructuringArrayQuery = exports.destructuringArraysAPI.useGetDestructuringArrayQuery;
//  регистрируем в store/store.ts
