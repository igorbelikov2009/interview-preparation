"use strict";
exports.__esModule = true;
exports.useGetArrayErrorQuery = exports.arrayErrorAPI = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.arrayErrorAPI = react_1.createApi({
    reducerPath: "arrayErrorAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (build) { return ({
        getArrayError: build.query({
            query: function () { return ({
                url: "/arrayErrorProcessing"
            }); }
        })
    }); }
});
exports.useGetArrayErrorQuery = exports.arrayErrorAPI.useGetArrayErrorQuery;
//  регистрируем в store/store.ts
