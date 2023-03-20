"use strict";
exports.__esModule = true;
exports.useGetLinksDOMQuery = exports.linksDOMAPI = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.linksDOMAPI = react_1.createApi({
    reducerPath: "linksDOMAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (build) { return ({
        getLinksDOM: build.query({
            query: function () { return ({
                url: "/linksDOM"
            }); }
        })
    }); }
});
exports.useGetLinksDOMQuery = exports.linksDOMAPI.useGetLinksDOMQuery;
//  регистрируем в store/store.ts
