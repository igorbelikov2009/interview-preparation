"use strict";
exports.__esModule = true;
exports.useGetLinksErrorQuery = exports.linksError = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.linksError = react_1.createApi({
    reducerPath: "linksError",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (build) { return ({
        getLinksError: build.query({
            query: function () { return ({
                url: "/linksErrorProcessing"
            }); }
        })
    }); }
});
exports.useGetLinksErrorQuery = exports.linksError.useGetLinksErrorQuery;
//  регистрируем в store/store.ts
