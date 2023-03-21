"use strict";
exports.__esModule = true;
exports.useGetFireBaseQuery = exports.fireBaseAPI = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.fireBaseAPI = react_1.createApi({
    reducerPath: "fireBaseAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (build) { return ({
        getFireBase: build.query({
            query: function () { return ({
                url: "/linksFireBase"
            }); }
        })
    }); }
});
exports.useGetFireBaseQuery = exports.fireBaseAPI.useGetFireBaseQuery;
//  регистрируем в store/store.ts
