"use strict";
exports.__esModule = true;
exports.useGetArrayDOMQuery = exports.arrayDOMAPI = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.arrayDOMAPI = react_1.createApi({
    reducerPath: "arrayDOMAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (build) { return ({
        getArrayDOM: build.query({
            query: function () { return ({
                url: "/arrayDOM"
            }); }
        })
    }); }
});
exports.useGetArrayDOMQuery = exports.arrayDOMAPI.useGetArrayDOMQuery;
//  регистрируем в store/store.ts
