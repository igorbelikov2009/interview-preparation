"use strict";
exports.__esModule = true;
exports.useGetLinksHTTPQuery = exports.linksHTTPAPI = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.linksHTTPAPI = react_1.createApi({
    reducerPath: "linksHTTPAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (build) { return ({
        getLinksHTTP: build.query({
            query: function () { return ({
                url: "/linksHTTP"
            }); }
        })
    }); }
});
exports.useGetLinksHTTPQuery = exports.linksHTTPAPI.useGetLinksHTTPQuery;
//  регистрируем в store/store.ts
