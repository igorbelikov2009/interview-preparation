"use strict";
exports.__esModule = true;
exports.useGetLinksGitHubQuery = exports.linksGitHubAPI = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.linksGitHubAPI = react_1.createApi({
    reducerPath: "linksGitHubAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (build) { return ({
        getLinksGitHub: build.query({
            query: function () { return ({
                url: "/linksGitHub"
            }); }
        })
    }); }
});
exports.useGetLinksGitHubQuery = exports.linksGitHubAPI.useGetLinksGitHubQuery;
//  регистрируем в store/store.ts
