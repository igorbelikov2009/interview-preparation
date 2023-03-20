"use strict";
exports.__esModule = true;
exports.useGetLinksDestructuringQuery = exports.linksDestructuringAPI = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.linksDestructuringAPI = react_1.createApi({
    reducerPath: "linksDestructuringAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (build) { return ({
        getLinksDestructuring: build.query({
            query: function () { return ({
                url: "/linksDestructuring"
            }); }
        })
    }); }
});
exports.useGetLinksDestructuringQuery = exports.linksDestructuringAPI.useGetLinksDestructuringQuery;
//  регистрируем в store/store.ts
