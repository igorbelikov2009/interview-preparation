"use strict";
exports.__esModule = true;
exports.useGetLinksArrayMethodsQuery = exports.arrayMethodsAPI = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.arrayMethodsAPI = react_1.createApi({
    reducerPath: "arrayMethodsAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (build) { return ({
        getLinksArrayMethods: build.query({
            query: function () { return ({
                url: "/linksArrayMethods"
            }); }
        })
    }); }
});
exports.useGetLinksArrayMethodsQuery = exports.arrayMethodsAPI.useGetLinksArrayMethodsQuery;
//  регистрируем в store/store.ts
