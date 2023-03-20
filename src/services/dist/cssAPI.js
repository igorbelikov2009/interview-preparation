"use strict";
exports.__esModule = true;
exports.useGetLinksCSSQuery = exports.cssAPI = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.cssAPI = react_1.createApi({
    reducerPath: "cssAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (build) { return ({
        getLinksCSS: build.query({
            query: function () { return ({
                url: "/linksCSS"
            }); }
        })
    }); }
});
exports.useGetLinksCSSQuery = exports.cssAPI.useGetLinksCSSQuery;
//  регистрируем в store/store.ts
