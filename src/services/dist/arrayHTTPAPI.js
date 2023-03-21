"use strict";
exports.__esModule = true;
exports.useGetArrayHTTPQuery = exports.arrayHTTPAPI = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.arrayHTTPAPI = react_1.createApi({
    reducerPath: "arrayHTTPAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (build) { return ({
        getArrayHTTP: build.query({
            query: function () { return ({
                url: "/arrayHTTP"
            }); }
        })
    }); }
});
exports.useGetArrayHTTPQuery = exports.arrayHTTPAPI.useGetArrayHTTPQuery;
//  регистрируем в store/store.ts
