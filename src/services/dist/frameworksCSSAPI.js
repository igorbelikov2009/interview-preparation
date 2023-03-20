"use strict";
exports.__esModule = true;
exports.useGetFrameworksCSSQuery = exports.frameworksCSSAPI = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.frameworksCSSAPI = react_1.createApi({
    reducerPath: "frameworksCSSAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (build) { return ({
        getFrameworksCSS: build.query({
            query: function () { return ({
                url: "/linksFrameworksCSS"
            }); }
        })
    }); }
});
exports.useGetFrameworksCSSQuery = exports.frameworksCSSAPI.useGetFrameworksCSSQuery;
//  регистрируем в store/store.ts
