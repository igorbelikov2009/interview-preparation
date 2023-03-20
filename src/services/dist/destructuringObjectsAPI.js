"use strict";
exports.__esModule = true;
exports.useGetDestructuringObjectsQuery = exports.destructuringObjectsAPI = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.destructuringObjectsAPI = react_1.createApi({
    reducerPath: "destructuringObjectsAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (build) { return ({
        getDestructuringObjects: build.query({
            query: function () { return ({
                url: "/arrayDestructuringObjects"
            }); }
        })
    }); }
});
exports.useGetDestructuringObjectsQuery = exports.destructuringObjectsAPI.useGetDestructuringObjectsQuery;
//  регистрируем в store/store.ts
